const Models = require('../../models');
// const Joi = require('joi');
const populateItemsDb = require('../helper/populateItemsDb');


const getItemsFromDb = () => Models.items.findAll();

const ifItemsInDb = () => Models.items.count().then((noOfItems) => {
  if (noOfItems === 0) {
    return populateItemsDb().then(() => getItemsFromDb());
  }
  return getItemsFromDb();
});


const login = {
  method: 'POST',
  path: '/items',
  handler: (request, response) => {
    ifItemsInDb().then((items) => {
      response({
        items,
        statusCode: 201,
      });
    }).catch((err) => {
      console.log(err, '>>>>>>>>>>>>>>>>');
    });
  },
//   config: {
//     validate: {
//       payload: {
//         userName: Joi.string().alphanum().min(3).max(30)
//           .required(),
//       },
//     },
//   },
};

module.exports = login;
