
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/* 
const average = [9, 8, 10, 7, 5].reduce((acc, curr) => acc + curr, 0);
console.log(average);
 */

function studentAverage() {
  // escreva seu código aqui
  const average = ((i) => grades[i]
    .reduce((acc, curr) => acc + curr, 0) / grades[i].length);

  return students.map((name, index) => ({name: name, average: average(index)}));
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);