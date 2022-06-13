const mongoose = require("mongoose");
const {Schema} = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

adminSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString(),
    delete returnObject._id;
    delete returnObject.__v;
    delete returnObject.password;
    
  },
});

adminSchema.plugin(uniqueValidator, {message: "Email already in use"});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;