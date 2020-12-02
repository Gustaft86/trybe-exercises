const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);  // => [ { Arroz: 2.99 }, { Feijao: 3.99 }, { Alface: 1.5 }, { Tomate: 2 }]

//Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
