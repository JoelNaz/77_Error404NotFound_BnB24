const express = require('express');
const {User,Investigator,UserReport} = require('../models/User');

const router = express.Router();

// Route to handle the submission of user reports
router.post('/postUserReports/:userId', async (req, res) => {
  try {

    const { userId } = req.params;
    const { title, description, location, image} = req.body;
    
    // Create a new UserReport instance
    const newUserReport = new UserReport({
      title,
      description,
      location,
      image,
      createdBy: userId, // userId is the ObjectId of the user who created the report
    });

    // Save the user report to the database
    await newUserReport.save();

    res.status(201).json({ message: 'User report created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/getUserReports/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Find user reports based on the createdBy field
    const userReports = await UserReport.find({ createdBy: userId });

    res.status(200).json({ userReports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;



module.exports = router;