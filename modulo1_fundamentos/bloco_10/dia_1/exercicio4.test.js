function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9), 'fizz');
// assert.strictEqual(myFizzBuzz(20), 'buzz');
// assert.strictEqual(myFizzBuzz(4), 4);
// assert.strictEqual(myFizzBuzz('1'), false);

test("Primeiro teste - retorno quando numero é divisivel por 3 e 5", () => {
  expect(myFizzBuzz(15)).toMatch('fizzbuzz');
});

test("Segundo teste - retorno quando numero é divisivel por 3", () => {
  expect(myFizzBuzz(9)).toMatch('fizz');
});

test("Terceiro teste - retorno quando numero é divisivel por 5", () => {
  expect(myFizzBuzz(20)).toMatch('buzz');
});

test("Quarto teste - retorno quando numero não é divisivel por 3 ou 5", () => {
  expect(myFizzBuzz(4)).toBe(4);
});

test("Quinto teste - retorno quando não numero", () => {
  expect(myFizzBuzz('1')).toBe(false);
});
