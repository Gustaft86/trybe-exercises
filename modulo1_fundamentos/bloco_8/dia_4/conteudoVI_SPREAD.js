// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'amora'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite ninho', 'pasta de amendoim', 'aveia'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]    ;
};

console.log(fruitSalad(specialFruit, additionalItens));