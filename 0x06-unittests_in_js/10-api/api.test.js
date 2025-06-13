const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index Page', () => {
  const API_URL = 'http://localhost:7865';

    it('test responses', (done) => {
        request.get(`${API_URL}/`, (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
        });
    });

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

  it('test available payments response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({
          payment_methods: 
          {
            credit_cards: true, 
            paypal: false
          }
        });
      done();
    });
  });

  it('test login response', (done) => {
    request.post(`${API_URL}/login`, 
      {json: {userName: 'Do'}}
      , (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Do');
      done();
    });
  });

  
});
