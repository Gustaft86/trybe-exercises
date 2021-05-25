const bodyParser = require('body-parser');
const express = require('express');
const app = express(); // 1
const authMiddleware = require('./auth-middleware');
const timeMiddleware = require('./timeMiddleware');
const rescue = require('express-rescue');
const fs = require('fs/promises');

app.use(timeMiddleware);
app.use(bodyParser.json());


// cria um evento na porta para requisições;
app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
}); // 3

// -----------------------------------

// primeira requisiçao feita - Hello World!
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
};

app.get('/hello', handleHelloWorldRequest); // 2

// -----------------------------------

// exercicio -modificando uma constante atraves das requets
const langs = ['HTML', 'CSS', 'JS', 'React'];

// com rota de autenticação em outro arquivo
app.get('/langs', [
  authMiddleware,
  (req, res) => {
    // incluido calculo de tempo atraves do middleware app.use(timeMiddleware);
    const endTime = Date.now() - req.startTime;
    res.status(200).json({
      message: `essa request foi processada em ${endTime} milissegundos`,
    });

    res.send(langs);
  }
]);

//  dispara uma requisiçao que atualiza a lista na constante "langs"
// app.post('/langs', (req, res) => {
//   langs.push('Node.js');
//   res.send('Linguagem Node.js adicionada com sucesso')
// });

// recebe atualizacao na requisiçao e atualiza dinamicamente a lista na constante "langs"
app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionada com sucesso`)
});

// ---------------------------------------

// verbo + rota + funções encadeadas com método next();
app.get(
  '/ping',
  function (req, res, next) {
    console.log('fiz alguma coisa');
    next();
    /* Chama a próxima callback */
  },
  function (req, res) {
    /* A segunda (e última) callback envia a resposta para o cliente */
    res.send('powwwng!');
  }
);

// --------------------------------------

// Rotas identicas porém separados em verbos
app.get('/teste', (req, res, next) => {
  res.send('Testando, som!');
  next();
});

app.get('/teste', (req, res) => {
  console.log('Tão me ouvindo?');
});

// -------------------------------------

// calcula tempo tempo de requisição
app.get('/tempo',(req, res) => {
  const endTime = Date.now() - req.startTime;
  console.log(Date.now(), req.startTime);
  res.status(200).json({
    message: `essa request foi processada em ${endTime} milissegundos`,
  });
});

// ------------------------------------

app.post('/hello', (req, res) => {
  const endTime = Date.now() - req.startTime;
  console.log(Date.now(), req.startTime);
  // req.body agora está disponível
  res.status(200)
    .json({
      greeting: `Hello, ${req.body.name}!`,
      message: `essa request foi processada em ${endTime} milissegundos`,
    });
});

// --------------------------------

// const express = require('express');
const simpsons = require('./simpsons');

// const app = express();

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

// app.listen(3000);

// ---------------------------------------

// const express = require('express');
// const app = express();
const authRouter = require('./authRouter');

app.use('/secure', authRouter); // a rota valida é /secure/hello, não existe uma rota somente /secure/ **ATENCAO**

/* GET /hello */
app.get('/hello_router', (req, res) => {
  res.status(200).json({ message: 'Hello world, with no auth!' });
});

// --------------------------------------

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});
