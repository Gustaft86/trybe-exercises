// encode-decode.test.js
const { encode, decode } = require('./exercicio6.js');

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('encode converte vogais a, e, i, o, u em 1, 2, 3, 4 e 5', () => {
    expect(encode("aeiou")).toMatch(/12345/);
  });
  it('decode converte vogais a, e, i, o, u em 1, 2, 3, 4 e 5', () => {
    expect(decode("12345")).toMatch(/aeiou/);
  });
  it('encode converte vogais a, e, i, o, u em 1, 2, 3, 4 e 5', () => {
    expect(encode("abcde")).not.toMatch(/1bcd5/);
  });
  it('decode converte vogais a, e, i, o, u em 1, 2, 3, 4 e 5', () => {
    expect(decode("1bcd5")).not.toMatch(/1bcd5/);
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
  expect(encode('trybe').length).toEqual(5);;
  });
});
