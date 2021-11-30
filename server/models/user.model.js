const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'User',
  Schema({
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    province: {
      type: String,
    },
    bikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bike',
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bike',
      },
    ],
  })
);
