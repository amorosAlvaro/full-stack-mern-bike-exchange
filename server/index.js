const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const { mongoConnect } = require('./config/connect');
const userRouter = require('./routes/users.routes');
const loginRouter = require('./routes/login.routes');
const bikeRouter = require('./routes/bikes.routes');
const imageRouter = require('./routes/image.routes');

const { PORT } = process.env;
const app = express();

mongoConnect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/bikes', bikeRouter);
app.use('/image', imageRouter);
app.listen(PORT);
