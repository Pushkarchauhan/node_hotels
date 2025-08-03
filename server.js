const express = require("express");
const app = express();
const db = require("./db");
const Menu = require("./models/menu.js");
require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const bodyParser = require("body-parser");
const personRoutes = require("./routers/personRoutes.js");
app.use(bodyParser.json());

//Middleware function

const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()}  Request Made to: ${req.orignalUrl}`
  );
  next();
};

app.get("/", logRequest, function (req, res) {
  res.send("Welcome to my hotel what can i do for you sir ?? ");
});

app.use(
  new LocalStrategy(async (username, password, done) => {
    try {
    } catch (error) {}
  })
);

app.use("/", personRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
