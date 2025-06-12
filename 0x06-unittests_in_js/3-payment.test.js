const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('call Utils.calculateNumber', () => {
    const spy = sinon.spy(utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);

    spy.restore();
  });
});
