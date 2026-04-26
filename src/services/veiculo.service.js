const Veiculo = require('../models/veiculo.model');

exports.listar = async () => {
  return await Veiculo.find();
};

exports.buscarPorId = async (id) => {
  return await Veiculo.findById(id);
};

exports.criar = async (dados) => {
  return await Veiculo.create(dados);
};

exports.atualizar = async (id, dados) => {
  return await Veiculo.findByIdAndUpdate(id, dados, { new: true });
};

exports.remover = async (id) => {
  return await Veiculo.findByIdAndDelete(id);
};