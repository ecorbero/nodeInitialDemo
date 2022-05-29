const formatDate = require('../controllers/formatdate.js')
const searchById = require('./searchbyid_mdb.js');
const ToDo = require("./todo");
//open conncetion to database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/todoDB');
 /*     let toDo1 = new ToDo({id: 3, text: 'Something to do 3.', userName: 'Elías'})
    let toDo2 = new ToDo({id: 4, text: 'Something to do 4.', userName: 'Zúmel'})
    toDo1.save()
    toDo2.save()  */
}

const updateTask = async (id, newState) => {
    const filter = { id: id };
    const updateState = { state: newState };
    let updateDate = { completData: null };
    const idToSearch = await searchById(id);
    if (idToSearch === null) {
        console.log(`ID ${id} doesn't exist!`);
    } else {
        if (newState !== 'executing' && newState !== 'pending' && newState !== 'completed') {
            console.log(`Input '${newState}' not valid.`);
        } else {
            await ToDo.findOneAndUpdate(filter, updateState);
            await ToDo.findOneAndUpdate(filter, updateDate);//Poner fecha como null por defecto por si se pasa de completed a executing.
            if (newState === 'completed') {
                updateDate = { completData: Date.now() };
                await ToDo.findOneAndUpdate(filter, updateDate);
            }
            console.log(`Task with ID ${id} is ${newState}.`)
        }      
    }
}         

updateTask(1, 'pending');

const showTaskState = async () => {
    console.log("showtaskstate");
}

module.exports = {
	updateTask,
	showTaskState
};
