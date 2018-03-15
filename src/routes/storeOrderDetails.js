const Models = require('../../models');

const storeResponses = {
  method: 'POST',
  path: '/orders',
  handler: (request, response) => {
    const { orderDetailsObj } = request.payload;
    Models.orders.create({}).then(placedOrder => Object.keys(orderDetailsObj).map(itemId => ({
      orderId: placedOrder.id,
      itemId,
      quantity: orderDetailsObj[itemId],
    })))
      .then(orders => Models.orderdetails.bulkCreate(orders))
      .then(() => {
        Object.keys(orderDetailsObj).map(itemId => Models.items.findOne({
          where: {
            itemId,
          },
        }).then(toUpdate => Models.items.update(
          {
            availableQuantity: toUpdate.availableQuantity - orderDetailsObj[toUpdate.itemId],
          },
          {
            where: {
              itemId,
            },
          },
        )));
      })
      .then(() => {
        response('Created Order Details').code(201);
      })
      .catch(console.log);
  },
};

module.exports = storeResponses;

