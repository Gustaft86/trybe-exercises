const firstFunction = (str) => str.toUpperCase(); //A primeira deve receber uma string e retorná-la em caixa alta.
const secondFunction = (str) =>  str.charAt(0); //A segunda deve também receber uma string e retornar só a primeira letra.
const thirdFunction = (str1, str2) => str1.concat(str2); //A terceira deve receber duas strings e concatená-las.

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};
