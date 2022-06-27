
// Import Model
const Players = require('../models/players.models');

// Create New Player
exports.newPlayer = async (req, res) => {

  // Input data
  const data = new Players({
    username: req.body.username,
    date: req.body.date,
    average: 0,
    numGames: 0,
  })

  try {
    // Sava data to Mongo DB
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
    // Error saving data to Mongo DB
      res.status(400).json({message: error.message})
  }
}

// Rename Player
exports.renamePlayer = async (req, res) => {
  try {
    
  // Input data
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      console.log
      

  // Sava data to Mongo DB
      const result = await Players.updateOne({_id: id}, updatedData, options);

      res.send(result)
  }
  catch (error) {
    // Error saving data to Mongo DB
      res.status(400).json({ message: error.message })
  }
}

// List all Players
exports.listPlayers = async (req, res) => {
  try {
    const result  = await Players.find({},{username:1,average:1});

    console.log(result);

    res.status(200).json(result);

  } catch (err) {
    console.error(err);
  } 
}
