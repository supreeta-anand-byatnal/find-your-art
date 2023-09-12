const mongoose = require('mongoose');
// const User = require('./db/models/user.js')
// const Educator = require('./db/models/educator.js');
// const Partner = require('./db/models/partner.js');
// const TeachingArtist = require('./db/models/teachingArtist.js');
// const Event = require('./db/models/event.js');
// const Image = require('./db/models/image.js');
require('dotenv').config();
const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(DB_URI);
    console.log('Connected');

    /*
        //insert an Educator
        const e1 = new Educator({
            profilePicture: Buffer,
            firstName: 'Eric',
            lastName: 'Smith',
            pronouns: 'he/him',
            email: 'esmith@gvhs.org',
            passwordHash: 'password123',
            schoolName: 'Green Valley High School',
            subjects: ['History'],
            groups: ['Tenth Grade'],
            city: 'Kenmore',
            zipcode: '98028',
            verified: false,
        });

        e1.save()
        .then((savedUser) => {
          console.log('User created:', savedUser);
        })
        .catch((err) => {
          console.error('Error creating user:', err);
        });
        */
  } catch (e) {
    console.log('Could not connect');
  } finally {
    //await mongoose.disconnect();
  }
};

connectDB().catch((err) => console.log(err));

module.exports = connectDB;
