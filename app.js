"use strict";

//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');

global.__basedir = __dirname;

// Controladors
const userController = require('./controllers/userController');
const uploadController = require('./controllers/uploadController');

// Middlewares
const uploadMiddleware = require("./middleware/uploadMiddleware");

// Afegir Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Assign Port
const port = 3000

// Routes

app.get("/users", userController);
app.post('/upload', uploadMiddleware, uploadController);

// finally, launch our server on port 3001.
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
  });