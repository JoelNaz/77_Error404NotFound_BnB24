// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const { User, Investigator } = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

const jwtSecret = 'your-secret-key';

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user with the provided username or email already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this username or email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedemail = await bcrypt.hash(email, 10);

    // Create a new user using the User schema
    const newUser = new User({
      username,
      email: hashedemail,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/usersignin', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ _id: user._id, username: user.username }, jwtSecret);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.post('/investigatorsignin', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Investigator.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ _id: user._id, email: user.email, fullName: user.fullName }, jwtSecret);
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  const generateRandomUsername = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Katherine', 'Leo', 'Mia', 'Nathan', 'Olivia', 'Peter', 'Quinn', 'Rose', 'Sam', 'Taylor'];
    
    const getRandomName = () => names[Math.floor(Math.random() * names.length)];
    
    const usernames = [];
  
    for (let i = 0; i < 50; i++) {
      const name = getRandomName();
      const randomSuffix = Math.floor(Math.random() * 9000) + 1000;
      const generatedUsername = `${name}${randomSuffix}`;
      usernames.push(generatedUsername);
    }
  
    return usernames;
  };



  router.get('/suggest-username', (req, res) => {
    try {
      const suggestedUsername = generateRandomUsername()[0]; // Get the first suggestion
      res.json({ suggestedUsername });
    } catch (error) {
      console.error('Error suggesting username:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });





module.exports = router;
