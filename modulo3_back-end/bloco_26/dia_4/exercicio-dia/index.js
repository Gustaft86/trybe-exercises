const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const rescue = require('express-rescue');
const simpsonsUtils = require('./fs-utils');
const authMiddleware = require('./authMiddleware');
app.use(authMiddleware);
const crypto = require('crypto');


// exercicio 1
app.get('/ping', (_req, res) => {
  res.status(200).json({ "message": "Pong!" })
});

// exercicio 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
})

// exercicio 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }
  res.status(200).json({ message: `Hello, ${name}!` });
});

// exercicio 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// exercicio 5
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();
  res.status(200).json(simpsons);
}))

// exercicio 6
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);
    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }
    res.status(200).json(simpson);
  })
);

// exercicio 7
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();
    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }
    simpsons.push({ id, name });
    await simpsonsUtils.setSimpsons(simpsons);
    res.status(204).end();
  })
);

// bonus
// exercicio 1
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

// bonus
// exercicio 2
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
})

// Tratamento de erro
app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

// evento de escuta
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});