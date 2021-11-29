const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'Bike',
  Schema({
    _id: Schema.Types.ObjectId,
    make: {
      String,
      required: true,
    },
    model: {
      String,
      required: true,
    },
    km: {
      Number,
      required: true,
    },
    year: {
      Number,
      required: true,
    },
    change: {
      Array,
      require: true,
    },
    user: {
      require: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    img: String,
    display: Boolean,
  })
);
