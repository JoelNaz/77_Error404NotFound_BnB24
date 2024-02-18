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

    res.status(200).json({ userReports, userId});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/reportstatus/:status', async (req, res) => {
  try {

    const { status } = req.params;

    // Find all user reports with status 'pending'
    const reports = await UserReport.find({ status: status });

    // Send the list of pending reports as a response
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/updateReportStatus/:reportId', async (req, res) => {
  try {
    const { reportId } = req.params;
    const { status } = req.body;

    // Validate if the provided status is valid (you can customize this based on your status values)
    const validStatusValues = ['pending', 'accepted', 'rejected'];
    if (!validStatusValues.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    // Update the status of the user report
    const updatedReport = await UserReport.findByIdAndUpdate(
      reportId,
      { status },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: 'User report not found' });
    }

    res.status(200).json({ message: 'Report status updated successfully', updatedReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;