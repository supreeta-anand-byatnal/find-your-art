const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/user');

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

// For testing only
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app
