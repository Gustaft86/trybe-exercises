function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// assert.strictEqual(sum(4, 5),9);
// assert.strictEqual(sum(0, 0),0);
// assert.throws(() => {sum(4,'5');});
// console.log(sum(4, '5'));

/* 
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */


test('primeiro teste - retorno de soma', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
});

test('segundo teste - retorno de erro', () => {
  expect(() => { sum(4, "5") }).toThrow();
  expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
});
