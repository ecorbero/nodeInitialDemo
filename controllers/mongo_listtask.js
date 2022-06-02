const ToDo = require('../models/todo');
const mongoose = require('mongoose');

const listTask = async (userId) => {
     try{
        const queryTask = await ToDo.findOne({id: userId});
        console.log(queryTask);
    } catch (err) {
        console.error(err);
    }
}

module.exports = listTask;