
const Models = require('../../models');

jest.mock('../helper/fetchItems');

const populateItemsDb = require('../helper/populateItemsDb');

describe('Testing the helper function populate database with items', () => {
  beforeAll((done) => {
    Models.items.destroy({ cascade: true, truncate: true }).then(() => {
      console.log('BEFORE');
      done();
    });
  });
  test('Should return length 0 for finding items in empty table', (done) => {
    Models.items.findAll().then((answerArray) => {
      expect(answerArray.length).toBe(0);
      done();
    });
  });
  test('Should return length > 0 for finding items in a table having items already', (done) => {
    populateItemsDb().then(() => {
      Models.items.findAll().then((answerArray) => {
        expect(answerArray.length).not.toBe(0);
        done();
      });
    });
  });
  afterAll((done) => {
    Models.items.destroy({
      truncate: 'true',
      cascade: true,
    }).then(() => {
      console.log('AFTER');
      done();
    });
  });
});
