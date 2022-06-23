const mongoose = require('mongoose');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 1000,
  socketTimeoutMS: 3000,
};

const connectDB = async connection_url => {
  try {
    mongoose.connect(connection_url, mongoOptions);
    console.log('Database connected');
  } catch (e) {
    console.log('Database not connected' + e);
  }
};

module.exports = connectDB;
