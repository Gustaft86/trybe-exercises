// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  // Os métodos de criação de associações que o sequelize disponibiliza são:
  // hasOne, belongsTo, hasMany, belongsToMany
  // No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo . A tradução literal desses métodos facilita o seu entendimento.
  // hasOne = tem um;
  // belongsTo = pertencente a;
  // hasMany : tem muitos;

  return Employee;
};
