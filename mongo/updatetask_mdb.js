
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
}

let toDo1 = new ToDo({id: 1, text: 'Something to do.', userName: 'Elías'})
let toDo2 = new ToDo({id: 2, text: 'Something to do 2.', userName: 'Huerta'})
toDo1.save()
toDo2.save()
console.log(toDo2);
//LIST OF QUERIES:
//https://mongoosejs.com/docs/api/query.html

                  
const updateTask = async (id, newState) => {
    const filter = { id: 1 }
    const update = { state: newState }

    let doc = await ToDo.findOneAndUpdate(filter, update);


    console.log(toDo1);
}         

updateTask(1, 'executing')

const showTaskState = async () => {
    console.log("showtaskstate");
}

module.exports = {
	updateTask,
	showTaskState
};
