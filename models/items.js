

module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    itemId: { type: DataTypes.INTEGER, unique: true },
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    orderdetailId: { type: DataTypes.INTEGER, unique: true },
  }, {});
  items.associate = function (models) {
    // associations can be defined here
  };
  return items;
};
