'use strict';
const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth.controller');

router.post('/signin', AuthController.signin, function(req, res) {
    console.log(req);
    console.log(res);
});
router.post('/signup', AuthController.signup, function(req, res) {
    console.log(req);
    console.log(res);
});

module.exports = router;