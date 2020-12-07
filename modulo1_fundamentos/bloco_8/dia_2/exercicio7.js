const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books
    .find(book => (book.author.name.split(' ')
    .filter(word => word.endsWith('.')).length === 3
  )).name;
}

/* 
//Cria uma array com cada palavra separadas por espaço;
console.log(
  'J. R. R. Tolkien'.split(' ')
);

//Verifica se o item da array termina com ponto, e retorna true ou false;
console.log(
  'J.'.endsWith('.')
);

//Filtra e retorna uma array com os itens que terminam com ponto;
console.log(
  ['J.', 'R.', 'R.', 'Tolkien'].filter(word => word.endsWith('.'))
);

//Conta quantos itens tem no array;
console.log(
  [ 'J.', 'R.', 'R.' ].length
);

//Por fim, o find está verificando cada item da array BOOKS, e retorna a primeira ocorrência que corresponde as lógicas anterior;
 */
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);