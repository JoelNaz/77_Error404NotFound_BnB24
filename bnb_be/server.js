const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chatRoutes');

const cors = require('cors');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:5173', // Update with your frontend's origin
  credentials: true, // Allow credentials (cookies) to be sent
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));


// MongoDB connection
mongoose.connect('mongodb+srv://joelnazareth24:hI2rbWBBeyHsN5dI@cluster0.uivxlnm.mongodb.net/BNB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware

app.use(bodyParser.json({ limit: '10mb' }));

const jwtSecret = 'your-secret-key';


// Routes
app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

app.post('/api/sendData', (req, res) => {
    const dataFromClient = req.body;
    console.log('Data received from client:', dataFromClient);
    res.json({ message: 'Data received successfully!' });
  });


  function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.sendStatus(401); // Unauthorized
  
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) return res.sendStatus(403); // Forbidden
      req.user = user;
      next();
    });
  }

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
