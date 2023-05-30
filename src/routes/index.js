"use strict";
const express = require("express");
const router = express.Router();

/** GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Welcome to the homepage" });
});

/** Post Routes */
router.use("/posts", require("./posts"));

/** Test Route */
router.get("/test", function (req, res, next) {
  res.json({ result: "Test success!" });
});

module.exports = router;
