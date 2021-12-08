const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model(
  'Bike',
  Schema({
    make: {
      type: String,
      required: true,
    },
    bike_model: {
      type: String,
    },
    km: {
      type: Number,
    },
    year: {
      type: Number,
    },
    change: {
      type: Array,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    avatar: {
      type: String,
    },

    cloudinary_id: {
      type: String,
    },

    display: { type: Boolean, default: true },
  })
);
