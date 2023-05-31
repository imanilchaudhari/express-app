'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  content: {
    type: String,
    required: 'Content is required'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Post', PostSchema);