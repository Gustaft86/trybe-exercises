const rescue = require('express-rescue');
const service = require('../services/Book');
const Joi = require('joi');

const getAll = rescue(async (_req, res) => {
  const books = await service.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id, name } = req.params;
  if (id) {
    const book = await service.findById(id);
    if (book.error) return next(book.error);
    return res.status(200).json(book);
  }
  const book = await service.findByName(name);
  if (book.error) return next(book.error);
  res.status(200).json(book);
})

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty(),
  }).validate(req.body);
  if (error) return next(error);
  const { title, author_id } = req.body;
  const bookCreated = await service.create(title, author_id );
  if (bookCreated.error) return next(bookCreated);
  res.status(201).json(bookCreated.ops[0]);
});

module.exports = {
  getAll, findById, create,
};