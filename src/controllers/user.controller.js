'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');

let UserController = {};

UserController.index = (req, res) => {
  User.find({}, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

UserController.create = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

UserController.view = (req, res) => {
  User.findById(req.params.id, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};


UserController.update = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

UserController.delete = (req, res) => {
  User.remove({ _id: req.params.id }, (err, post) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User successfully deleted' });
  });
};

module.exports = UserController;