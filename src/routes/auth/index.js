'use strict';
const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authJWT');
const AuthController = require('../../controllers/auth.controller');

router.post('/signin', AuthController.signin, function (req, res) {
  console.log(req);
  console.log(res);
});
router.post('/signup', AuthController.signup, function (req, res) {
  console.log(req);
  console.log(res);
});
router.post("/profile", verifyToken, function (req, res, user) {
  console.log(req.user);
  if (!req.user) {
    res.status(403)
      .send({
        message: "Invalid JWT token",
      });
  }
  if (req.user.role == "admin") {
    res.status(200)
      .send({
        message: "Data fetched successfully.",
        data: req.user
      });
  } else {
    res.status(403)
      .send({
        message: "Unauthorised access"
      });
  }
});

module.exports = router;