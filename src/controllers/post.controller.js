'use strict';
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

let PostController = {};

PostController.index = (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

PostController.create = (req, res) => {
  let newPost = new Post(req.body);
  newPost.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

PostController.view = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};


PostController.update = (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

PostController.delete = (req, res) => {
  Post.remove({ _id: req.params.id }, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Post successfully deleted' });
  });
};

module.exports = PostController;