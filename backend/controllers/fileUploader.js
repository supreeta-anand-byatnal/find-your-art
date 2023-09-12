const express = require('express');
const multer = require('multer');
const User = require('./models/user');
const Event = require('./models/event');

const app = express();

// Set up Multer to handle image uploads
const storage = multer.memoryStorage(); // Store the image in memory as a Buffer
const upload = multer({ storage: storage });

// Route to handle profile picture upload
app.post(
  '/upload-profile-picture',
  upload.single('profilePicture'),
  async (req, res) => {
    try {
      const user = await User.findById(req.body.userId);

      if (!user) {
        return res.status(404).send('User not found.');
      }

      // Update the profilePicture field with the uploaded image data
      user.profilePicture = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };

      await user.save();
      res.status(200).send('Profile picture uploaded successfully!');
    } catch (err) {
      console.error('Error uploading profile picture:', err);
      res.status(500).send('Error uploading profile picture.');
    }
  }
);

app.get('/profile-picture/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user || !user.profilePicture.data) {
      return res.status(404).send('Profile picture not found.');
    }

    res.setHeader('Content-Type', user.profilePicture.contentType);
    res.send(user.profilePicture.data);
  } catch (err) {
    console.error('Error retrieving profile picture:', err);
    res.status(500).send('Error retrieving profile picture.');
  }
});

// Route to handle image upload for events
app.post(
  '/upload-event-images/:eventId',
  upload.array('eventImages', 3),
  async (req, res) => {
    try {
      const event = await Event.findById(req.params.eventId);

      if (!event) {
        return res.status(404).send('Event not found.');
      }

      // Update the images field with the uploaded image data
      req.files.forEach((file) => {
        event.images.push({
          data: file.buffer,
          contentType: file.mimetype,
        });
      });

      await event.save();
      res.status(200).send('Event images uploaded successfully!');
    } catch (err) {
      console.error('Error uploading event images:', err);
      res.status(500).send('Error uploading event images.');
    }
  }
);

app.get('/event-image/:eventId/:imageIndex', async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event || !event.images[req.params.imageIndex]) {
      return res.status(404).send('Event image not found.');
    }

    const image = event.images[req.params.imageIndex];

    res.setHeader('Content-Type', image.contentType);
    res.send(image.data);
  } catch (err) {
    console.error('Error retrieving event image:', err);
    res.status(500).send('Error retrieving event image.');
  }
});
