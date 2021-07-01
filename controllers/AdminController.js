const multer = require("multer");
const path = require("path");
require("dotenv").config();

exports.index = async (req, res) => {
  const token = req.body.token || req.params.token || req.query.token || req.headers.authorization;
};
