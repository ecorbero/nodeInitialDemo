//open connection to database
const mongoose = require('mongoose');

const ToDo = require("../models/todo");

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
  await newTodo.save();
}

//addTask("paco","fer coses 2").catch(err => console.log(err));
const deleteTask = async (inputId) => {
  // Connect Mongo
  await mongoose.connect('mongodb://localhost:27017/todoDB');
  ToDo.deleteOne( {"id": inputId}).remove({ _id: req.body.id }, function(err) {
    if (!err) {
            message.type = 'notification!';
    }
    else {
            message.type = 'error';
    };

}

deleteTask(2);

module.exports = addTask;