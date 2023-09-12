const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Event schema
const eventSchema = new Schema({
  active: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: 'partner',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  openingHours: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },
  timeZone: {
    type: String,
    required: true,
  },
  eventImages: [
    {
      data: Buffer, // Binary image data
      contentType: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  virtual: {
    type: Boolean,
    required: true,
  },
  location: {
    //store address if virtual = False and stores link if virtual = True
    type: String,
    required: true,
  },
  ticketLink: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ], //to do: limit of 10 tags
});

const Event = model('Event', eventSchema);
module.exports = Event;
