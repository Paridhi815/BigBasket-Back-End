

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    itemId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    category: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    availableQuantity: {
      type: Sequelize.INTEGER,
    },
    cost: {
      type: Sequelize.FLOAT,
    },
    description: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    orderdetailId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('items'),
};
