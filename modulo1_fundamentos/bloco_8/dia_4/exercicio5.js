const assert = require('assert');
const { argv } = require('process');

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = (([a, b, c]) => [c, b, a]);

const swappedList = swap(myList)

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)