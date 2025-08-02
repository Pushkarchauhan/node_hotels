const express = require("express");
const app = express();
const db = require("./db");
const Menu = require("./models/menu.js");

const bodyParser = require("body-parser");
const personRoutes = require("./routers/personRoutes.js");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel what can i do for you sir ?? ");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


app.use('/', personRoutes);


