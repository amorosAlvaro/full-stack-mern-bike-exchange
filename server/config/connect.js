const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;

const uri = `mongodb+srv://${user}:${password}@cluster0.3n50x.mongodb.net/${name}?retryWrites=true&w=majority`;

async function mongoConnect() {
  const mongooseConnect = await mongoose.connect(uri);

  return mongooseConnect;
}

module.exports = { mongoConnect };
