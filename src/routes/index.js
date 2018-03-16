const testRoute = require('./testRoute');
const populateDb = require('./populateDb');
const storeOrderDetails = require('./storeOrderDetails');
const allOrdersDisplay = require('./allOrdersDisplay');

module.exports = [].concat(testRoute, populateDb, storeOrderDetails, allOrdersDisplay);
