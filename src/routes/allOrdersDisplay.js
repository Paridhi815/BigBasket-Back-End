const Models = require('../../models');


const displayOrders = () => {
  const promiseArray = [];
  return Models.orders.findAll({
    order: [['createdAt', 'DESC']],
    limit: 10,
  })
    .then(result => result.forEach(orderElement => promiseArray.push(Models.orders.findAll({
      where: {
        id: orderElement.dataValues.id,
      },
      include: [{
        model: Models.orderdetails,
      }],
    })))).then(() => Promise.all(promiseArray));
};


const login = {
  method: 'GET',
  path: '/orders',
  handler: (request, response) => {
    displayOrders().then((orders) => {
      console.log('hey', orders);
      response(orders);
    }).catch((err) => {
      console.log(err, '>>>>>>>>>>>>>>>>');
    });
  },
};

module.exports = login;


//   const result = res.reduce((accumulator, currentValue) => {
//     const acc = accumulator;
//     acc[currentValue.category] = acc[currentValue.category] || [];
//     acc[currentValue.category].push(currentValue);
//     return acc;
//   }, Object.create(null));
//   return (result);
