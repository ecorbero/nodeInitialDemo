const ToDo = require('../models/todo');
const mongoose = require('mongoose');

const listAll = async () => {
    try {
        const list = await ToDo.find();
        console.log(list);
    } catch (err) {
    console.error(err);
    }
}
  

module.exports = listAll;