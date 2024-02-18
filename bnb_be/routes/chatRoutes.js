const express = require('express');
const router = express.Router();
const { Chat } = require('../models/Chat');

// Endpoint to send a chat message
router.post('/chat/send', async (req, res) => {
  try {
    const { sender, receiver, message, participants } = req.body;
    const newMessage = new Chat({ sender, receiver, message, participants });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint to retrieve chat messages between two users or investigators
router.get('/chat/:userId/:investigatorId/:participants', async (req, res) => {
  try {
    const { userId, investigatorId, participants } = req.params;
    const messages = await Chat.find({
      $or: [
        { sender: userId, receiver: investigatorId, participants },
        { sender: otherUserId, receiver: userId, participants },
      ],
    }).sort({ timestamp: 1 });
    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;