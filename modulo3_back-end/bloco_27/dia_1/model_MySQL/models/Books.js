// models/Author.js

const connection = require('./connection');

// Busca todos os livros do banco.

const getAll = async () => {
  const [books] = await connection.execute(
      'SELECT id, title, author_id FROM model_example.books;',
  );
  return books;
};

module.exports = {
  getAll,
};