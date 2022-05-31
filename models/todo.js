const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
                id:  Number,    
                text: String, 
                state: { type: String, default: 'pending' }, 
                initDate: { type: Date, default: Date.now }, 
                completDate: { type: Date, default: null },
                userName: { type: String, required: true }
            });

//compiling the schema into a Model.
const ToDo = mongoose.model('ToDo', taskSchema);

module.exports = ToDo;

