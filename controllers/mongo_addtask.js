//open connection to database
const mongoose = require('mongoose');
const ToDo = require("../models/todo");

// Create Add Task
const addTask = async (userNameInput,taskNameInput) => {
  // Connect Mongo
  await mongoose.connect('mongodb://localhost:27017/todoDB');

  // Find the biggest id number:
  let foundMax = await ToDo.find().sort({"id":-1}).limit(1);
  let maxId = 1;
  if (foundMax != 0) {
    // Add 1 to max id
    maxId = foundMax[0].id + 1;
  }

  const newTodo = new ToDo(
    { 
      id:  maxId,
      text: taskNameInput,
      userName: userNameInput 
    }
  );
  
  // Save New Object
  let taskAdded =  await newTodo.save();
  
  // Console log
  console.log(`New Task "${taskNameInput}" added by "${userNameInput}"`);
}

// execute Add Task
//addTask ("enric 3","taskNameInput 3");

// Create Delete Task
const deleteTask = async (inputId) => {
  // Connect Mongo
  await mongoose.connect('mongodb://localhost:27017/todoDB');
  
  // find by id
  ToDo.find({ id: inputId })
  .then(res=> {
    console.log((`Removed ${res[0].text} Task from to Do List`))
    }
  )
  .catch(err=> console.log(`The Task Number ${inputId} Does Not exist.`))

  // Delete the document by its _id
  
  await ToDo.deleteOne({ id: inputId })
  
}

// Execute Delete Task
deleteTask(2);

module.exports = addTask;