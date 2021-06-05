// users-manager/models/User.js

const Joi = require('joi');

// Começamos importando a conexão com o banco
const connection = require('./connection');

// Vamos utilizar o ObjectId para validar e converter o id recebido como parâmetro mais pra frente.
const { ObjectId } = require('mongodb');

// Função que remove dos documentos da collection 'users', os campos indesejados
function formatUser(document) {
  const {
      // Extraímos as propriedades `_id` e `password`
      _id,
      password,
      // Utilizamos o operador _rest_ (`...`) para guardar o resto (😉) das propriedades
      // numa constante chamada `user`.
      ...user
  } = document;

  // Criamos um novo objeto contento os campos já formatados
  const formattedResult = {
      // O campo `id` recebe o valor de `_id`
      id: _id,
      // Utilizamos o operador _spread_ (`...`) para adicionar o resto das propriedades que tínhamos
      // gravado em `user`
      ...user,
  };

  // Retornamos o objeto com os campos formatados
  return formattedResult;
}

// Primeiro definimos qual o schema da nossa requisição
const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo {{#label}} é obrigatório',
  'string.min': 'O campo {{#label}} deve ter, pelo menos, {{#limit}} caracteres',
  'string.email': 'Informe um email válido no campo {{#label}}',
});

// Criamos um método para verificar se os dados do usuário são válidos
function isValid(userData) {
  return userSchema.validate(userData);
}

//   // Varificamos se os dados são válidos
//   if (!UserModel.isValid({ firstName, lastName, email, password })) {
//     // Caso os dados não sejam válidos, nós criamos um novo erro
//     const err = new Error('Invalid data');
//     // Atribuímos o status `400 Bad Request` ao erro
//     err.status = 400;
//     // Iniciamos o fluxo e de erro e encerramos a execução do middleware.
//     return next(err);
// }

// // Criamos um método para verificar se os dados do usuário são válidos
// function isValid({ firstName, lastName, email, password }) {
//   // Regex que valida strings de 6 ou mais caracteres alfanuméricos
//   const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
//   // Criamos um array para poder verificar com facilidade cada campo
//   const fields = [firstName, lastName, email, password];

//   // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
//   if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
//       return false;
//   }

//   // Por último, só precisamos garantir que `password` passa no regex.
//   // Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`
//   return PASSWORD_REGEX.test(password);
// }

// Função responsável por criar o usuário no banco de dados
function create({ firstName, lastName, email, password }) {
  // Utilizamos o `insertOne` para inserir o usuário na collection `users`
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password }))
  // Depois de criar o usuário, obtermos o ID gerado pelo banco e retornamos num objeto juntamente
  // com os demais dados do usuário recém-criado
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

function findAll() {
  return connection()
    // Utilizamos o `find` para buscar todos os documentos da collection `users`.
    // O `toArray` aqui é importante pois ele busca **todos** os registros, e transforma o resultado
    // em um array, como o próprio nome diz 😄
    .then((db) => db.collection('users').find().toArray())
    .then((results) => results.map(formatUser));
}


// users-manager/models/User.js

async function findById(id) {
  // Verificamos que o id que recebemos é válido
  if (!ObjectId.isValid(id)) {
    // Caso não seja um id válido, retornamos `null`
    return null;
  }

  // Buscamos o usuário no banco
  const user = await connection()
      // É importante lembrar de converter o parâmetro `id` para um `ObjectId` do MongoDB
      // utilizando `new ObjectId(id)`.
      .then((db) => db.collection('users').findOne(new ObjectId(id)));

  // Se nenhum usuário for encontrado, retornamos `null`
  if (!user) return null;

  // Caso encontremos um usuário retornamos seus dados formatados
  return formatUser(user);
}



async function updateUser(id, { firstName, lastName, email, password }) {
  // Verificamos se o id é válido. Se não for, retornamos `null`
  if (!ObjectId.isValid(id)) return null;

  // Atualizamos o documento no banco utilizando os novos dados
  const updatedUser = await connection()
  .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };
      // Repare no uso da opção `returnOriginal: false`. Ela faz com que o documento retornado
      // já contenha os dados atualizados.
      return db.collection('users')
          .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
          // Obtemos apenas o valor de retorno do banco, que é o usuário atualizado
          .then((result) => result.value);
  });

  // Caso nenhum usuário seja encontrado, retornamos `null`
  if (!updatedUser) return null;

  // Por fim, retornamos o usuário com os campos já formatados
  return formatUser(updatedUser);
}

module.exports = {
  isValid,
  create,
  findAll,
  findById,
  updateUser,
};