// Import Model
const Players = require('../models/players.models');

exports.postGame = async (req, res) => {

  try {
      const id = req.params.id;
      const updatedData = req.body.points;
      const options = { new: true };
      
      const result = await Players.updateOne( {_id: id}, { $push: { games : [ updatedData] } }, options );

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

exports.deleteGames = (req, res) => {

}


exports.listGames = (req, res) => {

}