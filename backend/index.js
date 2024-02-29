const express = require("express");
const db = require('./database/db');
const app = express();

app.listen(3001, function () {
  console.log("listening on 3001...",'http://localhost:3001');
});

app.get("/", function (req, res) {
    res.send("hello");
});

app.get("/connectiontest", function (req, res) {
  
});