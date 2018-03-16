const Server = require('../../server');
const Models = require('../../../models');
// const Sequelize = require('sequelize');

describe('Testing the hapi server for GET request', () => {
  beforeEach((done) => {
    Models.items.destroy({
      truncate: true,
    }).then(() => {
      console.log('BEFORE');
      done();
    });
  });
  afterEach((done) => {
    Models.items.destroy({
      truncate: true,
    }).then(() => {
      console.log('AFTER');
      done();
    });
  });
  test('Should return 201 status code for sucessful request', (done) => {
    const options = {
      method: 'POST',
      url: '/items',
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
});

