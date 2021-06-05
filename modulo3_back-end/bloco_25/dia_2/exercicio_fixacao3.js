// Utilizando o banco de dados storage , faça o seguinte exercício:
// Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

db.products.aggregate([{
  $addFields: {
    total_product: {
      $multiply: ["$sale_price", "$quantity"],
    },
  },
  $group: "$total_product"
}]);