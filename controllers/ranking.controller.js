// Import Model
const Players = require('../models/players.models');

exports.rankingGames = async (req, res) => {
    try {
      const result  = await Players.find({},{username:1,average:1}).sort({ average: -1});
  
      const result2 = await Players.aggregate([{$group: {_id:null, avg_val:{$avg:"$average"}}}]);

      result.push(result2);
  
      res.status(200).json(result);
  
    } catch (err) {
      console.error(err);
    } 
}

exports.loser = async (req, res) => {
    try {
      const result  = await Players.find({},{username:1,average:1}).sort({ "average": 1 }).limit(1);
  
      console.log(result);
  
      res.status(200).json(result);
  
    } catch (err) {
      console.error(err);
    } 
}

exports.winner = async (req, res) => {
    try {
      const result  = await Players.find({},{username:1,average:1}).sort({ "average": -1 }).limit(1);
  
      console.log(result);
  
      res.status(200).json(result);
  
    } catch (err) {
      console.error(err);
    } 
}