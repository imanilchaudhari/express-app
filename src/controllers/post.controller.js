'use strict';
const Post = require("../models/post.js");

let PostController = {};

PostController.index = (req, res) => {
  const title = req.query.title;

  Post.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

PostController.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Post
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    created_at: req.body.created_at
  });

  // Save Post in the database
  Post.create(post, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post."
      });
    } else {
      res.send(data);
    }
  });
};

PostController.view = (req, res) => {
  Post.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Post with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Post with id " + req.params.id
        });
      }
    } else {
      res.send(data);
    }
  });
};

PostController.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Post.updateById(
    req.params.id,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Post with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Post with id " + req.params.id
          });
        }
      } else {
        res.send(data);
      }
    }
  );
};

PostController.delete = (req, res) => {
  Post.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Post with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Post with id " + req.params.id
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};

module.exports = PostController;