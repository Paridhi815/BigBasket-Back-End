const Models = require('../../models');
const helper = require('./fetchItems');

const populateItemsDb = () => {
  const requestPromise = helper.fetchItems().then(itemsArray =>
    Models.items.bulkCreate(itemsArray));
  return requestPromise;
};

module.exports = populateItemsDb;
