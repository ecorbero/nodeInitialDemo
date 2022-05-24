//this document contains info that should be divided 
//into at probably model, functions and app..

https://mongoosejs.com/docs/index.html

//open conncetion to database
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

//creating schema
const todoSchema = new mongoose.Schema({        
                text: String, 
                state: String, 
                initDate: String, 
                completData: String,
                userName: String})

//compiling the schema into a Model.
const Todo = mongoose.model('Todo', todoSchema);

//creating an instance (document) and save to db
const todo1 = new ToDo( {text:someText, 
    state: someState, 
    initDate: new Date(), 
    completData: new Date(),
    userName: someName});

  // we can access all our documents through the Todo modell

    listAll = () => {
        const todos = await ToDo.find();
        console.log(todos);
    }
// mongoose supports mongo querying
await ToDo.find({taskId : 1});
await ToDo.find({userName : 'hannah'});


