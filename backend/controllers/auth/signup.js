const bcrypt = require('bcrypt');

// Dummy user data (replace this with a database in production)
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../db/mock.json');
const fakeUserDB = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// POST auth/signup
const signup = async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = fakeUserDB.find((user) => user.username === username);
  if (existingUser) {
    return res.status(409).json({ error: 'Username already exists' });
  }

  try {
    // Hash the password using bcrypt before storing it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = {
      id: fakeUserDB.length + 1,
      username: username,
      password: hashedPassword,
    };

    fakeUserDB.push(newUser);

    // Save the updated user data
    writeUsers(fakeUserDB);

    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = { signup };
