"use strict";
const app = require("express")();
const connectDB = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const serverHost = process.env.HOSTNAME || "localhost"
const serverPort = process.env.PORT || 3000;

let index = require("./src/routes/index");

connectDB();

//Parse incoming request bodies and register nested route
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", index);
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + " not found"
  });
});

app.listen(serverPort);

console.log(`RESTful API server started on port ${serverPort}`);
console.log(`Listening for traffic @ http://${serverHost}:${serverPort}`);

module.exports = app;