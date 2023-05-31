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
router.post("/profile", verifyToken, function (req, res, next) {
  AuthController.profile(req, res, next);
});

module.exports = router;