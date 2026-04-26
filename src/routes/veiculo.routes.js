// src/routes/veiculo.routes.js
const express = require('express');
const controller = require('../controllers/veiculo.controller');

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscar);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

module.exports = router;