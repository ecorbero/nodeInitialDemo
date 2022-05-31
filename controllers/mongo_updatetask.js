/**
 * 
 * Module with functions updateTask and showTaskState.
 * 
 */

const searchById = require('./mongo_searchbyid.js');
const ToDo = require('../models/todo');
const mongoose = require('mongoose');

/*  main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/todoDB');

}    */

/* let toDo1 = new ToDo({id: 1, text: 'Something to do 3.', userName: 'Elías'})
let toDo2 = new ToDo({id: 2, text: 'Something to do 4.', userName: 'Zúmel'})
toDo1.save()
toDo2.save()   */

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
//updateTask(2, 'completed')
const showTaskState = async (id) => {
    const filter = { id: id };
    let task = await ToDo.find (filter);
    const idToSearch = await searchById(id);
    if (idToSearch === null) {
        console.log(`Task ${id} doesn't exist.`);
    } else if (task[0].state === 'completed') {
        console.log(`The state of the task #${task[0].id} is ${task[0].state}, it was added ${task[0].initDate} by user: ${task[0].userName} and completed ${task[0].completDate}`);
    } else {
        console.log(`The state of the task #${task[0].id} is ${task[0].state}, it was added ${task[0].initDate} by user: ${task[0].userName}`);
    }
}

module.exports = { updateTask, showTaskState };