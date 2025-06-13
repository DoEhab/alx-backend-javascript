const request = require('request');
const chai = require('chai');

const { expect } = chai;


describe('index Page', () => {
  const API_URL = 'http://localhost:7865';

  it('test responses', () => new Promise((done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));

  it('test responses', () => new Promise((done) => {
    request.get(`${API_URL}/cart/8`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 8');
      done();
    });
  }));
  it('test responses', () => new Promise((done) => {
    request.get(`${API_URL}/cart/-1`, (err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
  it('test responses', () => new Promise((done) => {
    request.get(`${API_URL}/cart/xrir-rr`, (err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));

  it('test available payments response', () => new Promise((done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({
          payment_methods:
          {
            credit_cards: true,
            paypal: false,
          },
        });
      done();
    });
  }));

  it('test login response', () => new Promise((done) => {
    request.post(
      {
      url: `${API_URL}/login`,
      body: JSON.stringify({ userName: 'Do' }),
      headers: { 'Content-Type': 'application/json' }
    }
      ,
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Do');
        done();
      });
  }));
});
