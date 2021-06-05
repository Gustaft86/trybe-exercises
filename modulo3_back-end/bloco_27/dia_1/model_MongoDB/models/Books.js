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
  return booksData;
};

const isValid = (title, author_id) => {
	if (!title || typeof title !== 'string') return false;
	if (!author_id || typeof author_id !== 'number') return false;

	return true;
};

const create = async (title, author_id) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }));

module.exports = {
  getAll, findById, isValid, create,
};