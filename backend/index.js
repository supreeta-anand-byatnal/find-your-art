const express = require('express');
const morgan = require('morgan');

const connectDB = require('./db');
const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/user');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

connectDB();

// For testing only
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
