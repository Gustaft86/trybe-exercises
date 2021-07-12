'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("Stores", [
      {
        name: "Magazine",
        description: "Loja que tem os melhores eletros.",
      },
      {
        name: "Mercadão",
        description: "Pode vir! Aqui temos de tudo",
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Stores", null, {});
  }
};
