require('http-status-codes');
require('dotenv');

const express = require('express');
const app = express();

const start = () => {
  try {
    app.listen(6600, (req, res) => {
      console.log('listening on at port 6600....');
    });
  } catch (err) {
    console.log(err);
  }
};

start();
