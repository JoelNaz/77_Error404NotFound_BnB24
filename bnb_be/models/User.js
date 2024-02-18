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
  username: {
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
  phone: {
    type: String,
    required: true,
    unique: true,
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
  status: {
    type: String,
    required: true,
    default: 'pending',
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


const chatSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'participants',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'participants',
    required: true,
  },
  participants: {
    type: String,
    enum: ['User', 'Investigator'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model('Chat', chatSchema);


const UserReport = mongoose.model('UserReport', userReportSchema);
const User = mongoose.model('User', userSchema);
const Investigator = mongoose.model('Investigator', investigatorSchema);

module.exports = { User, Investigator, UserReport,Chat };
