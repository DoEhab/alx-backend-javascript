const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
  const API_URL = 'http://localhost:7865';

  it('test responses', (done) => {
    request.get(`${API_URL}/cart/8`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 8');
      done();
    });
  });
  it('test responses', (done) => {
    request.get(`${API_URL}/cart/-1`, (err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('test responses', (done) => {
    request.get(`${API_URL}/cart/xrir-rr`, (err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
