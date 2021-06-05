// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
use("storage");

db.products.aggregate([{
  $project: {
    name: 1,
    "cost_price": { $add: ["$purchase_price", "$taxes"] } }
}]);


// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.
use("storage");

db.products.aggregate([{
  $project: {
    name: 1,
    "lucro": {
      $subtract: [
        "$sale_price",
        { $add: ["$purchase_price", "$taxes"] },
      ],
    },
  },
}]);

// Utilizando o banco de dados storage , faça os seguintes exercícios:
// Retorne o menor número inteiro relativo ao preço de venda de cada produto;
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    round_sale_price: { $round: ["$sale_price"] },
  },
}]);

// Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    lucro: {
      $round: {
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] },
        ],
      },
    },
  },
}]);

// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule o valor absoluto do lucro total de cada produto.
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    lucro: {
      $abs: {
        $subtract: [
          { $add: ["$purchase_price", "$taxes"] },
          "$sale_price",
        ],
      },
    },
  },
}]);

// Utilizando o banco de dados storage , faça os seguintes exercícios:
// Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    total_stock: { $multiply: ["$sale_price", "$quantity"] },
  },
}]);

// Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    "lucro": {
      $multiply: [{
        $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] },
        ]},
        "$quantity",
      ],
    },
  },
}]);

// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
use("storage");

db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    fifth_sale_price: { $divide: ["$sale_price", 2] },
  },
}]);

