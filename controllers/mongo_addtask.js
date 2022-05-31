//open connection to database
const mongoose = require('mongoose');
const ToDo = require("../models/todo");

// Create Add Task
const addTask = async (userNameInput,taskNameInput) => {
  try{
    // Connect Mongo

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
    await newTodo.save();
    
    // Console log
    console.log(`New Task "${taskNameInput}" added by "${userNameInput}"`);
  }
  catch(err) {
    console.log("Error : ", err);
  }
}

// execute Add Task
//addTask ("enric 3","taskNameInput 3");

// Create Delete Task
const deleteTask = async (inputId) => {
  try{

    // Connect Mongo
    //await mongoose.connect('mongodb://localhost:27017/todoDB');
    
    // Find One and Delete
    let doc = await ToDo.findOneAndDelete({'id': inputId})
    // If Object with id NOT found
    if (doc === null) {
      console.log(`The Task Number ${inputId} Does Not exist.`)
    } 
    // If Object with id found
    else {
      console.log(`Removed ${doc.text} Task from to Do List`);
    }
    
  } catch(err) {
    console.log("Error : ", err);
  }
}

// Execute Delete Task
//deleteTask(2);

module.exports = {addTask, deleteTask};