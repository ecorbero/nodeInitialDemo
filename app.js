"use strict";

// Afegir Mòduls de Node
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Afegir Controladors
const userController = require('./controllers/userController');
const uploadController = require('./controllers/uploadController');
const timeController = require('./controllers/timeController');
const pokemonController = require('./controllers/pokemonController');

// Afegir Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const uploadMiddleware = require("./middleware/uploadMiddleware");
const { authUser, nocache } = require('./middleware/timeMiddlewares');

// Assign Port
const port = 3000

// Routes Nivell 1
app.get("/users", userController);
app.post('/upload', uploadMiddleware, uploadController);


// Routes Nivell 2
app.post('/time',[
  cors(),
  nocache,                         
  authUser
], timeController);

// Routes Nivell 3
app.get('/pokemon/:id', pokemonController);

// finally, launch our server on port 3000.
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
  });