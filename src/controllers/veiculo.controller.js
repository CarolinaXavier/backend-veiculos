// src/controllers/veiculo.controller.js
const service = require('../services/veiculo.service');

exports.listar = async (req, res) => {
  const data = await service.listar();
  res.json(data);
};

exports.buscar = async (req, res) => {
  const item = await service.buscarPorId(req.params.id);

  if (!item) return res.status(404).json({ erro: 'Não encontrado' });

  res.json(item);
};

exports.criar = async (req, res) => {
  try {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  } catch {
    res.status(400).json({ erro: 'Erro ao criar veículo' });
  }
};

exports.atualizar = async (req, res) => {
  const atualizado = await service.atualizar(req.params.id, req.body);

  if (!atualizado)
    return res.status(404).json({ erro: 'Não encontrado' });

  res.json(atualizado);
};

exports.remover = async (req, res) => {
  await service.remover(req.params.id);
  res.status(204).send();
};