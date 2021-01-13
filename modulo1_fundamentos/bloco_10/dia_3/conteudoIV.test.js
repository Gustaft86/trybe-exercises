const conteudoIV = require('./conteudoIV');
jest.mock("./conteudoIV");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  conteudoIV.somar.mockImplementation((a, b) => a + b);
  conteudoIV.somar(1, 2);

  expect(conteudoIV.somar).toHaveBeenCalled();
  expect(conteudoIV.somar).toHaveBeenCalledTimes(1);
  expect(conteudoIV.somar).toHaveBeenCalledWith(1, 2);
  expect(conteudoIV.somar(1, 2)).toBe(3);
});
