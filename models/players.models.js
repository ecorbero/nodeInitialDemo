const mongoose = require("mongoose");
const {Schema} = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const playersSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, //partialFilterExpression: { username: { $eq: "ANÒNIM" } },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  games: [{dau1: Number, dau2: Number}],
  average: {
    type: Number,
    required: true,
  },
  numGames:{
    type: Number,
    required: true,
  },
});

playersSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString(),
    delete returnObject._id;
    
  },
});

playersSchema.plugin(uniqueValidator, {message: "username already in use"});

const Players = mongoose.model("player", playersSchema);

module.exports = Players;