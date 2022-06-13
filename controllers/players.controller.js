
// Import Model
const Players = require('../models/players.models');

exports.newPlayer = async (req, res) => {

  const data = new Players({
    username: req.body.username,
    date: req.body.date
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

exports.namePlayer = (req, res) => {

}

exports.listPlayers = (req, res) => {

}