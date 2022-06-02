const ToDo = require('../models/todo');
const mongoose = require('mongoose');

const showTask = async (userId) => {
      
      try{
          const queryTask = await ToDo.findOne({id: userId});
          console.log(queryTask(id, task));
       } catch (err) {
           console.error(err);
       }
  }

  

module.exports = showTask;