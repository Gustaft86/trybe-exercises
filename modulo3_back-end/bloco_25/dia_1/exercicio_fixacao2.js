// Selecione todos os bancos;
db.transactions.aggregate([{ $group: { _id: "$bank", count: { $sum: 1 } } }]);

// Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([{ $group: { _id: "$bank", totalTransactions: { $sum: "$value" } }, count: { $sum: 1 } }]);

// Selecione o valor total de transações;
db.transactions.aggregate([{ $group: { _id: null, totalTransactions: { $sum: "$value" } } }]);

// Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([{ $match: { value: { $gt: 1000 } } }, { $group: { _id: "$bank" } } ]);

