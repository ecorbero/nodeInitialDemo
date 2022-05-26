
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
    await mongoose.connect('mongodb://localhost:27017/todo');
}

const toDo1 = new ToDo({_id: 1, text: 'Something to do.', userName: 'Elías'})

console.log(toDo1);
//LIST OF QUERIES:
//https://mongoosejs.com/docs/api/query.html

                  
const updateTask = async (id) => {
    // one option incorporates the search logic
    // ToDo.updateOne()
    // ToDo.findOneAndUpdate()
    
    console.log("update");
}         
                  
const showTaskState = async () => {
    console.log("showtaskstate");
}

module.exports = {
	updateTask,
	showTaskState
};
