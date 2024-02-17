const express = require('express');
const {User,Investigator,UserReport} = require('../models/User');

const router = express.Router();

// Route to handle the submission of user reports
router.post('/postUserReports', async (req, res) => {
  try {
    const { title, description, location, image } = req.body;
    
    // Create a new UserReport instance
    const newUserReport = new UserReport({
      title,
      description,
      location,
      image: Buffer.from(image, 'base64'), // Convert base64 image data to Buffer
    });

    // Save the user report to the database
    await newUserReport.save();

    res.status(201).json({ message: 'User report submitted successfully' });
  } catch (error) {
    console.error('Error submitting user report:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;