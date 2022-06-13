
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

exports.renamePlayer = async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Players.updateOne({_id: id}, updatedData, options);

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}


exports.listPlayers = (req, res) => {

}
