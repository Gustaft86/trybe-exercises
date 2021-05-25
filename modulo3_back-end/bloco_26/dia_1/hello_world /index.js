const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log('\n');
console.log('Hello, world!\n');
console.log(`Hello, ${name}! You are ${age} years old!\n`);