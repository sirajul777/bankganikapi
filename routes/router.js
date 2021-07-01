const express = require("express");
const router = express.Router();
require("dotenv").config();
const AuthController = require("../controllers/AuthController");

// route base
router.get("/", AuthController.getuser);

//login user
router.route("/auth").get(AuthController.getuser).post(AuthController.register);

module.exports = router;
