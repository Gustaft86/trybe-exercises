function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
  expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
});