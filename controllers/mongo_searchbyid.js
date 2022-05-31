const ToDo = require("../models/todo");
const mongoose = require('mongoose');

const searchId = async (id) => {
    const filter = { id: id };
    return await ToDo.exists(filter);
}

module.exports = searchId;