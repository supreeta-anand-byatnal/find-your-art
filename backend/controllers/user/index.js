const express = require('express');
const { getUser } = require('./profile');

const router = express.Router();

router.get('/', getUser);

module.exports = router;