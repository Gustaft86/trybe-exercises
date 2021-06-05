const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.findById(id);
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }
  return book;
};

const create = async (title, author_id) => {
  const existingBook = await Book.findByName(title, author_id);
  if (existingBook) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um livro já existe com esse nome',
      },
    };
  }
  return Book.create(title, author_id);
};

const findByName = async (name) => {
  const book = await Book.findById(name);
  if (!name) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o nome ${name}`,
      },
    };
  }
  return book;
};

module.exports = {
  getAll,
  findById,
  create,
  findByName,
};