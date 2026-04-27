require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/database');
const veiculoRoutes = require('./src/routes/veiculo.routes');

const app = express();

let isConnected = false;

const initDB = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

app.use(async (req, res, next) => {
  await initDB();
  next();
});

app.use(cors());
app.use(express.json());
app.get('/veiculos', veiculoRoutes);
/* app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
}); */
module.exports = app;