
// Dummy user data (replace this with a database in production)
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../db/mock.json');
const fakeUserDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const getUser = async (req, res) => {
    try {
      // For testing only
      const { username } = req.body;
      const user = fakeUserDB.find((user) => user.username === username);
      res.json(user);
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(401).json({ error: 'Invalid user' });
    }
};

module.exports = { getUser };