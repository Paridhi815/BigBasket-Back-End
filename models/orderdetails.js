

module.exports = (sequelize, DataTypes) => {
  const orderdetails = sequelize.define('orderdetails', {
    itemId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  orderdetails.associate = function () {
    // associations can be defined here
  };
  return orderdetails;
};
