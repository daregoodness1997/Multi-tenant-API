require('http-status-codes');
require('dotenv').config();

const morgan = require('morgan');
const connectDB = require('./db/connect');

const express = require('express');
const app = express();

// logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.get('/', (req, res) => {
  res.send(`<h2>Multi tenant API</h2>`);
});

const port = process.env.PORT || 7500;
 
const start = async () => {
  try {
    app.listen(port, console.log(`listening on at port ${port}....`));
    await connectDB(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
};

start();
