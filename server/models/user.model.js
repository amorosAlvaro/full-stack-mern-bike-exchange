const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'User',
  Schema({
    _id: Schema.Types.ObjectId,
    name: {
      String,
      required: true,
    },
    email: {
      String,
      required: true,
    },
    province: {
      String,
      required: true,
    },
    phone: String,
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
