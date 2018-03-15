const testRoute = require('./testRoute');
const populateDb = require('./populateDb');

module.exports = [].concat(testRoute, populateDb);
