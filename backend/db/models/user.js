const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
  profilePicture: {
    data: Buffer, // Binary image data
    contentType: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
