const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Connection error', error);
  }
};

module.exports = { connectDB };
