
//open connection to database
const mongoose = require('mongoose');
main().catch(err => console.log(err));



const ToDo = require("../models/todo");



async function main() {
  // Connect Mongo
  await mongoose.connect('mongodb://localhost:27017/todo');
  const newTodo = new ToDo (
    {
      "_id": 1,
      "text": "fer una cosa",
      "state": "pending",
      "initDate": new Date(),
      "userName": "enric"
    }
  )
  
  /*
  // Create Schema
  const kittySchema = new mongoose.Schema({
    name: String
  });
  // Create model
  //const Kitten = mongoose.model('Kitten', kittySchema);
  // Create document
  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'
  // Add methods
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  const Kitten = mongoose.model('Kitten', kittySchema);

  // New Object
  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

  // Save New Object
  await fluffy.save();
  fluffy.speak();

  // Show All
  const kittens = await Kitten.find();
  console.log(kittens);

  // Filter by name
  await Kitten.find({ name: /^fluff/ });
  */
};



//searchById
//(ToDo.find({}))

//LIST OF QUERIES:
//https://mongoosejs.com/docs/api/query.html


const addTask = async(text, userName) => {
/*
Would it be something like this?
const todo1 = new ToDo( {text:someText, 
     userName: someName}); */
  

}


/*
listTask

const listAll = async () => {
    try {
        const list = await ToDo.find();
        console.log(list);
    } catch (err) {
    console.error(err);
    }
}
                  
updateTask
// one option incorporates the search logic
// ToDo.updateOne()
// ToDo.findOneAndUpdate()
                  
deleteTask
//one option incorporates the search logic
// ToDo.deleteOne()
// ToDo.findOneAndDelete()

                  
showTaskState 
//




module.exports = {
	addTask,
	listTask,
    listAll,
	updateTask,
	deleteTask,
	showTaskState,
	searchById
};
*/