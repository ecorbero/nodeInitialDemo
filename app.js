"use strict";

//
const express = require('express');
const cors = require('cors');
const app = express();
const { check, header } = require('express-validator');
require('dotenv').config();

// Controladors
const userController = require('./controllers/userController');
const uploadController = require('./controllers/uploadController');
const timeController = require('./controllers/timeController');
const pokemonController = require('./controllers/pokemonController');

// Afegir Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const uploadMiddleware = require("./middleware/uploadMiddleware");
const { validarFormulari, authUser, noCacheControl } = require('./middleware/timeMiddlewares');

// Assign Port
const port = 3000

// Routes Nivell 1
app.get("/users", userController);
app.post('/upload', uploadMiddleware, uploadController);


// Routes Nivell 2
app.post('/time',[
  cors(),
  noCacheControl,
  header('user', 'Falta Usuari (min 3 caràcters)').isLength({min:3}),
  header('pass', 'Falta Contrasenya (min 6 caràcters)').isLength({min:6}),   
  check('username', 'Indicar un username').not().isEmpty(),
  validarFormulari,                          
  authUser
], timeController);

// Routes Nivell 3
app.get('/pokemon/:id', [
  check('id','Posar id vàlid').isInt(),
  validarFormulari
], pokemonController);

// finally, launch our server on port 3000.
const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
  });