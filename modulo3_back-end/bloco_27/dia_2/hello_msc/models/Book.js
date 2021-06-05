// models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

// Busca todos os livros do banco.

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const booksData = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  if (!booksData) return null;
  const { title, author_id } = booksData;
  return { id, title, author_id };
};

const create = async (title, author_id) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }));

const findByName = async (title) => {
  const query = { title };

  const book = await connection()
    .then((db) => db.collection('books').findOne(query));

  // Caso nenhum author seja encontrado, devolvemos null
  if (!book) return null;

  // Caso contrário, retornamos o author encontrado
  return book;
};

module.exports = {
  getAll, findById, create, findByName
};