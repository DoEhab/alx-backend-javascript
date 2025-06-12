const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it('call Utils.calculateNumber', () => {

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'SUM', 100, 20);
  });
  it('call Utils.calculateNumber', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'SUM', 10, 10);

  });
});
