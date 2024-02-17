// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const investigatorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userReportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer, // Store binary image data
    required: true,
  },
  // Reference to the user who created the report
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const UserReport = mongoose.model('UserReport', userReportSchema);
const User = mongoose.model('User', userSchema);
const Investigator = mongoose.model('Investigator', investigatorSchema);

module.exports = { User, Investigator, UserReport };
