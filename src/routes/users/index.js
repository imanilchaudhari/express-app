'use strict';
const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authJWT');
const UserController = require('../../controllers/user.controller');

// router.get('/', UserController.index);
// router.post('/', UserController.create);
// router.get('/:id', UserController.view);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.delete);

router.get("/", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    UserController.index(req, res, next);
  }
});

router.post("/", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    UserController.create(req, res, next);
  }
});

router.get("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    UserController.view(req, res, next);
  }
});

router.put("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    UserController.update(req, res, next);
  }
});

router.delete("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    UserController.delete(req, res, next);
  }
});

module.exports = router;