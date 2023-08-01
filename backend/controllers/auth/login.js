const bcrypt = require('bcrypt');

// Dummy user data (replace this with a database in production)
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'db.json');
const fakeUserDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));


const login = async (req, res) => {
    const { username, password } = req.body;
  
    // Find the user with the provided username
    const user = fakeUserDB.find((u) => u.username === username);

    if (!user) {
        return res.status(401).json({ error: 'User not found' });
    }

    try {
        // Compare the provided password with the hashed password from the database
        const passwordMatches = await bcrypt.compare(password, user.password);

        if (passwordMatches) {
        res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
        } else {
        res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Login failed' });
    }
};

module.exports = { login };