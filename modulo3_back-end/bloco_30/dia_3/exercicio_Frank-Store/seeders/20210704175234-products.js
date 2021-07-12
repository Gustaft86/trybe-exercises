'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Iphone",
        description: "Possui apenas 1 chip, muito bom!",
        amount: 5000,
        store_id: 1,
      },
      {
        name: "A20",
        description: "Melhor custo benefício",
        amount: 2000,
        store_id: 1,
      },
      {
        name: "Moto G10",
        description: "Resistente a água",
        amount: 2500,
        store_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Products", null, {});
  },
};
