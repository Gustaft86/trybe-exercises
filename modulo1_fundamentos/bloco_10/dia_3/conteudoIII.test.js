let randomNumber = () => Math.floor(Math.random() * 101);

let isDivisible = (number) => (randomNumber() % number) === 0;

describe("Para fixar", () => {
  beforeEach(() => {
    randomNumber = jest.fn()
  });
  
  test("testando se a função foi chamada, dentro de outra função", () => {
    isDivisible();
    expect(randomNumber).toHaveBeenCalled();
   });

  test("testando se true, quando recebe 2 e randomico é par", () => {
    randomNumber.mockReturnValue(4);
    expect(isDivisible(2)).toBe(true);
  });

  test("dois valores e um valor default de retorno", () => {
    randomNumber
      .mockReturnValue(7)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(1);
    expect(isDivisible(2)).toBe(true);
    expect(isDivisible(2)).toBe(false);
    expect(isDivisible(2)).toBe(false);
    expect(isDivisible(2)).toBe(false);
  });
});
