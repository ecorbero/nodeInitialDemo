// Import Model
const Players = require('../models/players.models');

// Post Game
exports.postGame = async (req, res) => {

  try {
      const id = req.params.id;
      const updatedData = req.body;
      const resData = await Players.findOne({_id: id});
      const updateNumGames = resData.numGames + 1;
      const totalPoints = updatedData.dau1 + updatedData.dau2;
      // check if Success => totalPoints = 7
      var success = 0;
      if (totalPoints == 7) {
        success = 1;
      }
      const updateAverage = (resData.average * resData.numGames + success) / updateNumGames;
      
      const options = { new: true };
      
      const result = await Players.updateOne( {_id: id}, { $push: { games : [ updatedData] }, average: updateAverage,numGames: updateNumGames  }, options );

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

// Delete all Games form one Player
exports.deleteGames = async  (req, res) => {

  try {
    const id = req.params.id;
    const options = { new: true };
    
    const result = await Players.updateOne( {_id: id}, { $set: { games : [ ] }, average: 0,numGames: 0 }, options );

    res.send(result)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
}

// List all Games from one Player
exports.listGames = async  (req, res) => {

  try {
    
    const id = req.params.id;

    const result  = await Players.find({_id: id},{games:1,average:1});
    res.status(200).json(result)
  } catch (err) {
    console.error(err);
  } 
}