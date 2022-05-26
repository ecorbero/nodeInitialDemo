
//TO DO get the config of the path to the DB 

const ToDo = require("./todo");

//open conncetion to database
const mongoose = require('mongoose');
main().catch(err => console.log(err));

//TO DO the config of the path should probably be parametres???
async function main() {
    await mongoose.connect('mongodb://localhost:27017/todo');
}





//searchById
//(ToDo.find({}))

//LIST OF QUERIES:
//https://mongoosejs.com/docs/api/query.html


const addTask = async(text, userName) => {
/*
Would it be something like this?
const todo1 = new ToDo( {text:someText, 
     userName: someName}); */


}


listTask

const listAll = async () => {
    try {
        const list = await ToDo.find();
        console.log(list);
    } catch (err) {
        console.error(err);
    }
}
                  
updateTask
// one option incorporates the search logic
// ToDo.updateOne()
// ToDo.findOneAndUpdate()
                  
deleteTask
//one option incorporates the search logic
// ToDo.deleteOne()
// ToDo.findOneAndDelete()

                  
showTaskState 
//




module.exports = {
	addTask,
	listTask,
    listAll,
	updateTask,
	deleteTask,
	showTaskState,
	searchById
};
