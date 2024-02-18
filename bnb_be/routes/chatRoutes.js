const express = require('express');
const router = express.Router();
const { Chat } = require('../models/User');

// Endpoint to send a chat message
router.post('/send', async (req, res) => {
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
router.get('/:userId/:investigatorId/:participants', async (req, res) => {
  try {
    const { userId, investigatorId, participants } = req.params;
    const messages = await Chat.find({
      $or: [
        { sender: userId, receiver: investigatorId, participants },
        { sender: investigatorId, receiver: userId, participants },
      ],
    }).sort({ timestamp: 1 });
    
    res.status(200).json({ messages });
    console.log("success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/:userId/:investigatorId', async (req, res) => {
  try {
    const { userId, investigatorId } = req.params;
    const messages = await Chat.find({
      $or: [
        { sender: userId, receiver: investigatorId },
        { sender: investigatorId, receiver: userId },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json({ messages });
    console.log("success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;