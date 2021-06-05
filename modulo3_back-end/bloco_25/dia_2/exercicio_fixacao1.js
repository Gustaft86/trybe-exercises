// 1.Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { clients_name: "$name" },
      pipeline: [{
        $match: {
          $expr: {
            $eq: ["$from", "$$clients_name"] 
          }
        }
      }],
      as: "transactions_clients"
    }
  }
]);

// 2.Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { clients_name: "$name" },
      pipeline: [{
        $match: {
          $expr: {
            $eq: ["$to", "$$clients_name"] 
          }
        }
      }],
      as: "transactions_clients"
    }
  },
  { $limit: 4 },
]);

// 3.Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: { State: "Florida" }
  },
  {
    $lookup: {
      from: "transactions",
      let: { clients_name: "$name" },
      pipeline: [{
        $match: {
          $expr: {
            $eq: ["$to", "$$clients_name"] 
          }
        }
      }],
      as: "transactions_clients"
    }
  },
]);