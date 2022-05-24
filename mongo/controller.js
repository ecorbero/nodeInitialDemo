//TO DO get the config of the path to the DB

const ToDo = require("./todo");

//open conncetion to database
const mongoose = require('mongoose');
main().catch(err => console.log(err));

//TO DO the config of the path should probably be parametres???
async function main() {
    await mongoose.connect('mongodb:///*path to db*/');
}


