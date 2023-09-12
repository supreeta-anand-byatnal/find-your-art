const bcrypt = require('bcrypt');

// Dummy user data (replace this with a database in production)
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../db/mock.json');
const fakeUserDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

// POST auth/login
const login = async (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    console.log(req.body)
  
    // Find the user with the provided loginEmail
    const user = fakeUserDB.find((u) => u.loginEmail === loginEmail);

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

    try {
        // Compare the provided loginPassword with the hashed loginPassword from the database
        const loginPasswordMatches = await bcrypt.compare(loginPassword, user.loginPassword);

        if (loginPasswordMatches) {
            console.log("hi")
        res.json({ message: 'Login successful', user: { id: user.id, loginEmail: user.loginEmail } });
        } else {
        res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Login failed' });
    }
};

module.exports = { login };
