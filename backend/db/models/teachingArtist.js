const mongoose = require('mongoose');
const User = require('./user.js')
const { Schema, model } = mongoose;

// Teaching artist schema
const teachingArtistSchema = new Schema({
    firstName: {
        type: String, 
        required: true, 
    },
    lastName: {
        type: String, 
        required: true, 
    },
    pronouns: {
        type: String, 
        required: true, 
    },
    website: String,            //optional
    socialMediaLink: [String], //optional
    disciplines: [{
        type: String, 
        required: true, 
    }],
    teachingEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }],
    pastEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }]
});

const TeachingArtist = User.discriminator('TeachingArtist', teachingArtistSchema);
module.exports = TeachingArtist;