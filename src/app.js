require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
const veiculoRoutes = require('./routes/veiculo.routes');

const app = express();

// ⚠️ IMPORTANTE: cuidado com conexão em serverless
connectDB();

app.use(cors());
app.use(express.json());

app.use('/veiculos', veiculoRoutes);

module.exports = app;