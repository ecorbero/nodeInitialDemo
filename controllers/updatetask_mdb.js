/**
 * 
 * Module with functions updateTask and showTaskState.
 * 
 */

const formatDate = require('../controllers/formatdate.js')
const searchById = require('./searchbyid_mdb.js');
const ToDo = require('../models/todo');
const mongoose = require('mongoose');

0

const updateTask = async (id, newState) => {
    const filter = { id: id };
    const updateState = { state: newState };
    let updateDate = { completDate: null };
     if (newState !== 'executing' && newState !== 'pending' && newState !== 'completed') {
        console.log(`Input '${newState}' not valid.`);
    } else {
        await ToDo.findOneAndUpdate(filter, updateState);
        await ToDo.findOneAndUpdate(filter, updateDate);//Poner fecha como null por defecto por si se pasa de completed a executing.
        if (newState === 'completed') {
            updateDate = { completDate: Date.now() };
            await ToDo.findOneAndUpdate(filter, updateDate);
        }
        console.log(`Task with ID ${id} is ${newState}.`)
    }      
}

const showTaskState = async (id) => {
    const filter = { id: id };
    let task = await ToDo.find (filter);
     if (task[0].state === 'completed') {
        console.log(`The state of the task #${task[0].id} is ${task[0].state}, it was added ${task[0].initDate} by user: ${task[0].userName} and completed ${task[0].completDate}`);
    } else {
        console.log(`The state of the task #${task[0].id} is ${task[0].state}, it was added ${task[0].initDate} by user: ${task[0].userName}`);
    }
}

/* module.exports = {
	updateTask,
	showTaskState
};
 */
module.exports = { updateTask, showTaskState };