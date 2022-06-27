const adminController = require("../controllers/admin.controller");
const playersController = require("../controllers/players.controller");
const gamesController = require("../controllers/games.controller");
const rankingController = require("../controllers/ranking.controller");

const express = require("express");
const router = express.Router();

// admin Controllers
router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.get("/userProfile", adminController.userProfile);

// player Controllers
router.post("/players", playersController.newPlayer);
router.put("/players/:id", playersController.renamePlayer);
router.get("/players", playersController.listPlayers);

// games Controllers
router.post("/games/:id", gamesController.postGame);
router.delete("/games/:id", gamesController.deleteGames);
router.get("/games/:id", gamesController.listGames);

// ranking Controllers
router.get("/ranking", rankingController.rankingGames);
router.get("/ranking/loser", rankingController.loser);
router.get("/ranking/winner", rankingController.winner);


module.exports = router;

