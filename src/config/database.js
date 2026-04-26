// src/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://carolinaxavier_db_user:VhOnlU9EX4l0j703@cluster0.e7yxqlp.mongodb.net/?appName=Cluster0');
    console.log('MongoDB conectado');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;