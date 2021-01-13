const conteudoVII = require('./conteudoVII');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(conteudoVII.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(conteudoVII, "somar")
    .mockImplementation((a, b) => a - b);

  conteudoVII.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  conteudoVII.somar.mockRestore();
  expect(conteudoVII.somar(1, 2)).toBe(3);
});
