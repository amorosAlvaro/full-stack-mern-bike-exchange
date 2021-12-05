const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model(
  'Image',
  Schema({
    name: String,
    avatar: String,
    cloudinary_id: String,
  })
);
