const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));
  const test = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });
  return { id: test.id };
};

module.exports = {
  create,
};
