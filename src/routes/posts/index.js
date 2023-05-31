'use strict';
const express = require('express');
const router = express.Router();
const verifyToken = require('../../middlewares/authJWT');
const PostController = require('../../controllers/post.controller');

// router.get('/', PostController.index);
// router.post('/', PostController.create);
// router.get('/:id', PostController.view);
// router.put('/:id', PostController.update);
// router.delete('/:id', PostController.delete);

router.get("/", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    PostController.index(req, res, next);
  }
});

router.post("/", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    PostController.create(req, res, next);
  }
});

router.get("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    PostController.view(req, res, next);
  }
});

router.put("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    PostController.update(req, res, next);
  }
});

router.delete("/:id", verifyToken, function (req, res, next) {
  if (req.user == undefined) {
    res.status(403).send({ message: "Invalid JWT token" });
  } else {
    PostController.delete(req, res, next);
  }
});

module.exports = router;