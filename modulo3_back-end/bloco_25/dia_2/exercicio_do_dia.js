// Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
]);

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $match: { idade: { $gte: 18, $lte: 25 } }
  },
  {
    $count: 'clientes18a25'
  },
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
]);

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
  {
    $match: {
      "$compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
]).itcount();

// Exercício 6 : Deixe apenas os top 10 clientes com mais compras nesse período.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras",
      },
    },
  },
  {
    $sort: {
      totalCompras: -1,
    }
  },
  {
    $limit: 10
  },
]);

// Exercício 7 : Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra ( valorTotal ).
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras",
      },
    },
  },
  {
    $sort: {
      totalCompras: -1,
    }
  },
  {
    $limit: 10
  },
  {
    $unwind: "$compras"
  },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] },
        ],  
      },
    },
  },
]);

// Exercício 8 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
use("erp");

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [365 * 24 * 60 * 60 * 1000] },
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras", 
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
  {
    $addFields: {
      totalCompras: {
        $size: "$compras",
      },
    },
  },
  {
    $sort: {
      totalCompras: -1,
    }
  },
  {
    $limit: 10
  },
  {
    $unwind: "$compras"
  },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.10] },
        ],  
      },
    },
  },
    {
    $group: {
      _id: "$endereco.uf",
      totalCompras: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalCompras: -1
    }
  },
  { $limit: 5 },
]);

// Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
// Copiar
// {
//   "nomeCliente": "NOME",
//   "uf": "UF DO CLIENTE",
//   "totalConsumido": 100
// }
use("erp");

db.vendas.aggregate([
  {
  // 1o filtro QUEIJO PRATO, retorna o array [itens], porem completo com todos os elementos. **importante para reduzir a carga de processamento**
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
  // desestrutura o array [itens] em varios documentos.
    $unwind: "$itens" 
  },
  {
  // 2o filtro QUEIJO PRATO, retorna os documentos de tem o elemento QUEIJO PRATO na propriedade itens.
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
  // agrupa por cliente, contando quantas vezes vc comprou QUEIJO PRATO.
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade"
      }
    }
  },
  {
  // ordena os clientes que mais compraram QUEIJO PRATO.
    $sort: { totalConsumido: -1 }
  },
  {
  // mostra o que mais comprou QUEIJO PRATO.
    $limit: 1
  },
  {
  // tras os dados do cliente da collection Clientes.
    $lookup: {
      from: 'clientes',
      localField: '_id',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
  // transforma o array [cliente] paraum objeto para poder projetar
    $unwind: "$cliente"
  },
  {
  // projeta o objeto no formato desejado.
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0
    }
  }
]);

// Exercício 10 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .
use("erp");

db.vendas.aggregate([
  {
    // retorna todas as vendas de MARÇO de 2020 e status EM SEPARAÇÃO 
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO"
    },
  },
  {
    // acrescenta 3 dias na data da venda
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60 * 1000]
      },
    },
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1
    },
  },
]);