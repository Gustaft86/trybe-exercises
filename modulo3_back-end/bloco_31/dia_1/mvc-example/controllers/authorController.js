const Author = require('../models/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).render('authors/index', { authors });
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  res.status(200).render('authors/show', { author });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

// Na view new.ejs , verificamos se a variável message contém um valor não nulo e, caso tenha,
// renderizamos uma div com a mensagem recebida. É por isso que no controller newAuthor precisamos passar
// { message: null } como segundo parâmetro. Se não fizéssemos isso, ocorreria um erro ao tentar renderizar a view,
// pois a variável message não estaria definida.

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  console.log(req.body);

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
}
