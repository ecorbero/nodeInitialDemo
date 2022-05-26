
//open connection to database
const mongoose = require('mongoose');
main().catch(err => console.log(err));

const ToDo = require("./models/todo");

async function main() {
  // Connect Mongo
  await mongoose.connect('mongodb://localhost:27017/todoDB');

  // Crear New todo
  
  // Find the biggest id number:
  let foundMax = await ToDo.find().sort({"id":-1}).limit(1);
  let maxId = 1;
  if (foundMax != 0) {
    // Add 1 to max id
    maxId = foundMax[0].id + 1;
  }

  const newTodo = new ToDo(
    { 
      id:  maxId,
      text: "Descansar fins dilluns",
      userName: 'Pepe' 
    }
  );


  // Save New Object
  await newTodo.save();

  // Create Schema
/* 
  const kittySchema = new mongoose.Schema({
    name: String
  });
  // Create model
  //const Kitten = mongoose.model('Kitten', kittySchema);
  // Create document
  // const silence = new Kitten({ name: 'Silence' });
  //console.log(silence.name); // 'Silence'
  // Add methods
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  // Create model
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