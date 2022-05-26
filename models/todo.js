const mongoose = require('mongoose');

//creating schema
const taskSchema = new mongoose.Schema({
                id:  Number,    
                text: String, 
                state: { type: String, default: 'pending' }, 
                initDate: { type: Date, default: Date.now }, 
                completData: { type: Date, default: null },
                userName: { type: String, required: true }
});


//compiling the schema into a Model.
const ToDo = mongoose.model('ToDo', taskSchema);

module.exports = ToDo;

