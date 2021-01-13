const conteudoVI = require('./conteudoVI');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(conteudoVI.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  conteudoVI.somar = jest.fn().mockImplementation((a, b) => a - b);

  conteudoVI.somar(5, 1);
  expect(conteudoVI.somar).toHaveBeenCalledTimes(1);
  expect(conteudoVI.somar(5, 1)).toBe(4);
  expect(conteudoVI.somar).toHaveBeenCalledTimes(2);
  expect(conteudoVI.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  conteudoVI.somar.mockReset();
  expect(conteudoVI.somar(1, 2)).toBe(undefined);
  expect(conteudoVI.somar).toHaveBeenCalledTimes(1);
  expect(conteudoVI.somar).toHaveBeenLastCalledWith(1, 2);
});
