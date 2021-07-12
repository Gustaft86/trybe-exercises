const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Store.associate = (models) => {
    Store.hasMany(models.Products, { foreignKey: "store_id", as: "products" });
  };
  return Store;
};
module.exports = Store;