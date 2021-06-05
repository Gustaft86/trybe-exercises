const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Books');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const authors = await Author.findById(id);

    res.status(200).json(authors);
})

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    const authorCreated = await Author.create(first_name, middle_name, last_name);

    res.status(201).json(authorCreated);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await Book.findById(id);

    res.status(200).json(books);
})

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;

    if (!Book.isValid(title, author_id)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    const bookCreated = await Book.create(title, author_id );

    res.status(201).json(bookCreated.ops[0]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
