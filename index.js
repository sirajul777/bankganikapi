const express = require("express");
const route = require("./routes/router");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors")();
require("dotenv").config();
const session = require("express-session");
const mongostrore = require("connect-mongodb-session")(session);
const port = process.env.PORT || 3000;

// todo use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
// todo declare file url
app.use("/files", express.static("library"));

app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
