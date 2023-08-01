const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./controllers/auth');

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/auth', authRoutes);

module.exports = app
