

module.exports = (sequelize, DataTypes) => {
  const orderdetails = sequelize.define('orderdetails', {
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  orderdetails.associate = function (models) {
    // associations can be defined here
    orderdetails.hasOne(models.items);
  };
  return orderdetails;
};
