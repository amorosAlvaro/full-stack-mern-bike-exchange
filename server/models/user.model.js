const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports = mongoose.model(
  'User',
  Schema({
    userName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    password: {
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
    phone: {
      type: String,
    },
  }),
);
