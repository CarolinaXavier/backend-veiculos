// src/app.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const veiculoRoutes = require('./routes/veiculo.routes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/veiculos', veiculoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
