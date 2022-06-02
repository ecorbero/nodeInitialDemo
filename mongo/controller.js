
//TO DO get the config of the path to the DB 

const ToDo = require("./todo");

const mongoose = require('mongoose');
main().catch(err => console.log(err));

//TO DO the config of the path should probably be parametres???
async function main() {
    await mongoose.connect('mongodb://localhost:27017/todo');



  const listAll = async () => {
    try {
        const list = await ToDo.find();
        console.log(list);
    } catch (err) {
    console.error(err);
    }
}
  

const listTask = async (userId) => {
     try{
        const queryTask = await ToDo.findOne({'id': userId});
        console.log(queryTask);
    } catch (err) {
        console.error(err);
    }
}

const showTask = async (userId) => {
      try{
          const queryTask = await ToDo.findOne({id: userId});
          console.log(queryTask(id, task));
       } catch (err) {
           console.error(err);
       }
  }


     




module.exports = {
	addTask,
	listTask,
    listAll,
	updateTask,
	deleteTask,
	showTaskState,
	searchById
};
