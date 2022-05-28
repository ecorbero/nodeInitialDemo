const formatDate = require('../controllers/formatdate.js')
//TO DO get the config of the path to the DB 
/**
 * UpdateTask
 * ShowTaskState
 */
const ToDo = require("./todo");
//open conncetion to database
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//TO DO the config of the path should probably be parametres???
async function main() {
    await mongoose.connect('mongodb://localhost:27017/todoDB');
/*     let toDo1 = new ToDo({id: 5, text: 'Something to do.', userName: 'Elías'})
    let toDo2 = new ToDo({id: 6, text: 'Something to do 2.', userName: 'Huerta'})
    toDo1.save()
    toDo2.save() */
}


//console.log(toDo2);
//LIST OF QUERIES:
//https://mongoosejs.com/docs/api/query.html

                  
const updateTask = async (id, newState) => {
    const filter = { id: id };
    const updateState = { state: newState };
    let updateDate = { completData: null };
    const idToSearch = await ToDo.exists(filter)
    if (idToSearch === null) {
        console.log(`ID ${id} doesn't exist!`);
    } else {
        if (newState !== 'executing' && newState !== 'pending' && newState !== 'completed') {
            console.log('Input not valid.');
        } else {
            const doc = await ToDo.findOneAndUpdate(filter, updateState);
            const doc2 = await ToDo.findOneAndUpdate(filter, updateDate); //Poner fecha como null por defecto por si se pasa de completed a executing.
        }
        if (newState === 'completed') {
            updateDate = { completData: Date.now() };
            const doc = await ToDo.findOneAndUpdate(filter, updateDate);
        }
    }

}         

updateTask(41, 'completed');

const showTaskState = async () => {
    console.log("showtaskstate");
}

module.exports = {
	updateTask,
	showTaskState
};
