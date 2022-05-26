const mongoose = require('mongoose');

//creating schema
//TO DO articulate the properties and keys of
//the schema should we have a userId? should each document
// be a user with an array of tasks? 
const todoSchema = new mongoose.Schema({
                _id:  Number,    
                text: String, 
                state: { type: String, default: 'pending' }, 
                initDate: { type: Date, default: Date.now }, 
                completData: { type: Date, default: null },
                userName: { type: String, required: true }
            });

//compiling the schema into a Model.
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;