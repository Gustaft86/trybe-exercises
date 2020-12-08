
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

//console.log('Aanemarie'.split('').filter((letter) => letter === 'A' || letter === 'a').length);

function containsA() {
  return names.reduce((acc, curr) => 
    acc + (curr.split('').filter((letter) => letter === 'A' || letter === 'a').length)
    , 0);
}

assert.deepStrictEqual(containsA(), 20);