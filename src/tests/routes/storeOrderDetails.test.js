const Server = require('../../server');
const Models = require('../../../models');

describe('Testcase for test route', () => {
  beforeAll((done) => {
    Models.orderdetails.deleteAllOrderDetails().then(() => {
      console.log('BEFORE');
      done();
    });
  });
  it('Testing for status code 201', (done) => {
    const options = {
      method: 'POST',
      url: '/orders',
      payload: {
        orderDetailsObj: { 100: 2, 110: 1 },
      },
    };
    Server.inject(options, (response) => {
      console.log('hgsdkgi', response.statusCode);

      expect(response.statusCode).toBe(201);
      done();
    });
  });

  it('Responds with 400 statusCode for empty orderDetailsObj', (done) => {
    const options = {
      method: 'POST',
      url: '/orders',
      payload: {
        orderDetailsObj: '',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  it('Responds with 400 statusCode when payload is not an object', (done) => {
    const options = {
      method: 'POST',
      url: '/orders',
      payload: {
        orderDetailsObj: 8,
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });
  // afterAll((done) => {
  //   Models.orderdetails.destroy({ cascade: true, truncate: true }).then(() => {
  //     console.log('BEFORE');
  //     done();
  //   });
  // });
});

// with single question
// const option1 = {
//   method: 'POST',
//   url: '/orders',
//   payload: {
//     orderDetailsObj: 'Whats up',
//     questions: [{ questionText: 'how are you?', isRequired: true, questionType: 'short answer' }],
//   },
// };

// with multiple questions
// const option2 = {
//   method: 'POST',
//   url: '/orders',
//   payload: {
//     orderDetailsObj: 'Whats up!',
//     questions: [{ questionText: 'how are you?', isRequired: true, questionType: 'shortans' },
//       { questionText: 'how is everything?', isRequired: true, questionType: 'shortans' }],
//   },
// };


// describe('Testcase for Form server', () => {
//   beforeEach(done => Models.orders.deleteAllorders()
//     .then(() => Models.questions.deleteAllQuestions()
//       .then(() => done())));

//   afterEach(done => Models.orders.deleteAllorders()
//     .then(() => Models.questions.deleteAllQuestions()
//       .then(() => done())));


//   test('Test when there is one question and form title', (done) => {
//     Server.inject(option1, (response) => {
//       expect(response.result.code).toBe(201);
//       // console.log('this', response.result);
//       expect(response.result.data.title).toBe('Whats up');
//       expect(response.result.data.questions[0].dataValues.questionText).toBe('how are you?');
//       expect(response.result.data.questions[0].dataValues.isRequired).toBe(true);
//       expect(response.result.data.questions[0].dataValues.questionType).toBe('short answer');

//       expect(Models.orders.count()).resolves.toBe(1);
//       expect(Models.questions.count()).resolves.toBe(1);
//       done();
//     });
//   });

//   test('Test when the quesArray payload has two questions', (done) => {
//     Server.inject(option2, (response) => {
//       expect(response.result.code).toBe(201);
//       expect(response.result.data.title).toBe('Whats up!');
//       expect(response.result.data.questions[0].dataValues.questionText).toBe('how are you?');
//       expect(response.result.data.questions[1].dataValues.questionText).toBe('how is everything?');
//       expect(Models.orders.count()).resolves.toBe(1);
//       expect(Models.questions.count()).resolves.toBe(2);
//       done();
//     });
//   });
// });
