// ### Exercício 2
// users-manager/middlewares/getAllUsers.js

const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
  rescue(async (req, res, next) => {

  // Pedimos para o model buscar todos os usuários
  const users = await UserModel.findAll();

  // Como o `find` sempre retorna um Array, não precisamos nos preocupar:
  // caso nenhum resultado seja encontrado, o próprio MongoDB retornará um array vazio
  res.status(200).json(users)
  }),
];
