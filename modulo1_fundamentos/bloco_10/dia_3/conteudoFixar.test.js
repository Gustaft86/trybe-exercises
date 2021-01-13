const math = require('./conteudoFixar');
jest.mock("./conteudoFixar")

test("#subtrair", () => {
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled;
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair(5, 2)).toBe(undefined);
});

test("#multiplicar", () => {
  math.multiplicar.mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled;
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar(5, 2)).toBe(10);
});

//...