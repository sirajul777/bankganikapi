const express = require("express");
const router = express.Router();
require("dotenv").config();
const AuthController = require("../controllers/AuthController");

// route base
router.get("/auth", AuthController.getuser);

//login user
router.post("/auth", AuthController.register);

module.exports = router;
