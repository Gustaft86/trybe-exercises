// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let cupsWater = 0;
  let numbers = string.match(regex);
  for (let index = 0; index < numbers.length; index += 1) {
    cupsWater += parseInt(numbers[index], 10);
  }
  if (cupsWater === 1) {
    return `${cupsWater} copo de água`;
  }
  return `${cupsWater} copos de água`;
}

console.log(hydrate("1 copo de cachaça, 3 doses de licor"));

module.exports = hydrate;
