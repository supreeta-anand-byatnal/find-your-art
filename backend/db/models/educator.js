const mongoose = require('mongoose');
const User = require('./user.js')
const { Schema, model } = mongoose;

// Educator schema
const educatorSchema = new Schema({
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
    schoolName: {
        type: String, 
        required: true, 
    },
    subjects: [{
        type: String, 
        required: true, 
    }],
    groups: [{
        type: String, 
        required: true, 
    }],
    savedEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }],
    pastEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }]
});

const Educator = User.discriminator('Educator', educatorSchema);
module.exports = Educator;