const testRoute = require('./testRoute');
const populateDb = require('./populateDb');
const storeOrderDetails = require('./storeOrderDetails');

module.exports = [].concat(testRoute, populateDb, storeOrderDetails);
