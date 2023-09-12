const mongoose = require('mongoose');
const User = require('./user.js');
const { Schema, model } = mongoose;

// Art Partner schema
const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  socialMediaLink: [String], //optional
  disciplines: [
    {
      type: String,
      required: true,
    },
  ],
  postedEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'event',
    },
  ],
  pastEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'event',
    },
  ],
});

const Partner = User.discriminator('Partner', partnerSchema);
module.exports = Partner;
