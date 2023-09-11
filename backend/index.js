const express = require('express');
const morgan = require('morgan');
const authRoutes = require('./controllers/auth');
const userRoutes = require('./controllers/user');

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

// For testing only
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// DATA CONNECTION
const mongoose = require('mongoose');
const User = require('./models/user.js')
const Educator = require('./models/educator.js');
const Partner = require('./models/partner.js');
const TeachingArtist = require('./models/teachingArtist.js');
const Event = require('./models/event.js');
const Image = require('./models/image.js');

async function main() {
    const uri =
  "mongodb+srv://rfg9:findYourArt23@cluster0.4xcfy2s.mongodb.net/FindYourArt?retryWrites=true&w=majority";

    try {
        // Connect to the MongoDB cluster
        await mongoose.connect(uri);
        console.log("Connected");

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
        console.log("Could not connect");
    } finally {
        //await mongoose.disconnect();
    }
}

main().catch(err => console.log(err));
// ----------------------------------

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
