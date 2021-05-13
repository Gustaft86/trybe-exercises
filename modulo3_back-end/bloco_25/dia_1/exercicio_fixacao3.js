// Utilizando o banco de dados agg_example , adicione a seguinte collection e faça os exercícios:

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "transactions_history" } }]);
  

// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "transactions_history" } }, { $limit: 4 }]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([{ $match: { State: 'Florida' } }, { $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "transactions_history" } }]);

