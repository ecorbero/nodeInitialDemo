const userController = require("../controllers/admin.controller");

const express = require("express");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/userProfile", userController.userProfile);

module.exports = router;

