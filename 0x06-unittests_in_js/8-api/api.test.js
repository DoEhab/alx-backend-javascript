const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
  const API_URL = 'http://localhost:7865';

  it('test responses', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res).to.have.header('content-type', /text\/html/);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
