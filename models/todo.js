const mongoose = require('mongoose');

//creating schema
const todoSchema = new mongoose.Schema({
                _id:  int,    
                text: String, 
                state: { type: String, default: 'pending' }, 
                initDate: { type: Date, default: Date.now }, 
                completData: { type: Date, default: null },
                userName: { type: String, required: true }
});


//compiling the schema into a Model.
const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;

