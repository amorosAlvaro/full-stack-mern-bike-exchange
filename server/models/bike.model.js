const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'Bike',
  Schema({
    make: {
      type: String,
      required: true,
    },
    model: {
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
    img: String,
    display: Boolean,
  })
);
