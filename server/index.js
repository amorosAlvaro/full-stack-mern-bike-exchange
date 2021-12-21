const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const { mongoConnect } = require('./config/connect');
const userRouter = require('./routes/users.routes');
const loginRouter = require('./routes/login.routes');
const bikeRouter = require('./routes/bikes.routes');

const { PORT } = process.env;
const app = express();

mongoConnect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/bikes', bikeRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 401;
  next(error);
});
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
});

app.listen(PORT);
