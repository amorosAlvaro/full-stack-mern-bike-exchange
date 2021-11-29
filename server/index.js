const express = require('express');
const bodyParser = require('body-parser');
const { mongoConnect } = require('./config/connect');

mongoConnect();

const app = express();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

app.listen(PORT);
