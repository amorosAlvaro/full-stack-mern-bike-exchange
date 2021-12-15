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
    class: {
      type: String,
    },
    km: {
      type: Number,
    },
    province: {
      type: String,
    },
    year: {
      type: Number,
    },
    change: [{
      type: Array,
    }],
    description: {
      type: String,
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
  }),
);
