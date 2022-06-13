const Admin = require("../models/admin.models");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth");

async function login({ username, password}, callback) {
  const user = await Admin.findOne({ username});

  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateAccesssToken(username);
      return callback(null, {...user.toJSON(),token});
    } else {
      return callback({
        message: "Invalid Username/Password"
      })
    }
  }  else {
    return callback({
      message: "Invalid Username"
    })
  }
}

async function register(params, callback) {
  console.log(params)

  if(params.username === undefined) {
    return callback({message: "Username Required"});
  }

  const user = new Admin(params);
  user.save()
  .then((response) => {
    return callback(null, response)
  })
  .catch((error) => {
    return callback(error)
  })
}

module.exports = {
  login,
  register,
}