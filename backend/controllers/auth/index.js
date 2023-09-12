const express = require('express');
const { login } = require('./login');
const { signup } = require('./signup');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
