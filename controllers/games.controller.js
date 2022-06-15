// Import Model
const Players = require('../models/players.models');

// Post Game
exports.postGame = async (req, res) => {

  try {
      const id = req.params.id;
      const updatedData = req.body.games;
      const updateAverage = req.body.average;
      const updateNumGames = await Players.find({_id: id}).select('numGames') + 1;
      console.log(updateNumGames
        )
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
    
    const result = await Players.updateOne( {_id: id}, { $set: { games : [ ] } }, options );

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

    const result  = await Players.find({_id: id});
    res.status(200).json(result)

    const playerName = result[0].username;
    const arrayGames = result[0].games;
    var wins = 0;
    console.log(`Nom del Jugador =  ${playerName}`)
    for (let index = 0; index < arrayGames.length; index++) {
      const element = arrayGames[index];
      if (element == 7) {
        wins ++;
      }
      console.log(`Jugada ${index}, resultat = ${element}, ${element == 7 ? 'partida guanyada!' : 'failed!'}`)
    }
    
    console.log(`Percentatge d’èxit de totes les tirades = ${(100 * wins/arrayGames.length).toFixed()} %`)

  } catch (err) {
    console.error(err);
  } 
}