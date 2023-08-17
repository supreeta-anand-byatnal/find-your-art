const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/user');
const path = require('path');

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

// For testing only
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'build','index.html'));
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app
