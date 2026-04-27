const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const veiculoRoutes = require('./routes/veiculo.routes');

const app = express();

let isConnected = false;

/* const initDB = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

app.use(async (req, res, next) => {
  await initDB();
  next();
});
 */
app.use(cors());
app.use(express.json());

app.use('/veiculos', veiculoRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

module.exports = app;