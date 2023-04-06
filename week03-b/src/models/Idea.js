const mongoose = require('mongoose')

const IdeaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
  },
  optionKit: {
    type: String,
    default: 'one-Person',
    enum: ['one-Person', 'two-Person', 'four-Person'],
  },
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Idea', IdeaSchema)