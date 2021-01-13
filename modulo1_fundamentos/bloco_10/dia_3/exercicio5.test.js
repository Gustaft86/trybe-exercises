const service = require("./exercicio5");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(service, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

      expect(first("UPPERCASE")).toBe("uppercase");
      expect(first).toHaveBeenCalled();
      expect(first).toHaveBeenCalledTimes(1);
      expect(first).toHaveBeenCalledWith("UPPERCASE");
  
    service.firstFunction.mockRestore();

    expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const secondFunction = jest
      .fn()
      .mockImplementation(a => a.charAt(a.length - 1)); //retornar a útlima letra de uma string

    expect(secondFunction("letter")).toBe("r");
    expect(secondFunction).toHaveBeenCalled();
    expect(secondFunction).toHaveBeenCalledTimes(1);
    expect(secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    const thirdFunction = jest
      .fn()
      .mockImplementation((a, b, c) => a.concat(b, c)); // receber três strings e concatená-las.

    expect(thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(thirdFunction).toHaveBeenCalled();
    expect(thirdFunction).toHaveBeenCalledTimes(1);
    expect(thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});
