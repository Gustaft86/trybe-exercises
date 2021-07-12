module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',  // Configura o que deve acontecer ao atualizar ou excluir um usuário.
        onDelete: 'CASCADE',  // Nesse caso, todos os produtos daquele usuário serão alterados ou excluídos.
        field: 'employee_id',
        references: {
          model: 'Employees', // Indica qual tabela nossa FK está referenciando.
          key: 'id',  // Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key .
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
