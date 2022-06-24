const mongoose = require('mongoose');

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 1000,
  socketTimeoutMS: 3000,
};

const connectDB = async connection_url => {
  return new Promise(async (resolve, reject) => {
    const connection = await mongoose
      .createConnection(connection_url, mongoOptions)
      .asPromise();
    resolve(connection);
  });
};

module.exports = connectDB;

// const mongoose = require('mongoose');

// const mongoOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   autoIndex: true,
//   connectTimeoutMS: 1000,
//   socketTimeoutMS: 3000,
// };

// const connectDB = async connection_url => {
//   return new Promise(async (resolve, reject) => {
//     const connection = await mongoose
//       .createConnection(connection_url, mongoOptions)
//       .asPromise();
//       resolve(connection);
//   });
// };

// module.exports = connectDB;

// // try {
// //   mongoose.connect(connection_url, mongoOptions);
// //   console.log('Database connected');
// // } catch (e) {
// //   console.log('Database not connected' + e);
// // }
