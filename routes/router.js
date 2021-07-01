const express = require("express");
const router = express.Router();
require("dotenv").config();
const AuthController = require("../controllers/AuthController");

// route base
router.get("/", async (req, res) => {
  try {
    let user = await auth.getUser();
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

//login user
router.route("/auth").get(AuthController.getuser).post(AuthController.register);

module.exports = router;
