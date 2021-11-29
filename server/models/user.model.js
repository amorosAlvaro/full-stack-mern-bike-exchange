const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'User',
  Schema({
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
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
