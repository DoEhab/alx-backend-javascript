const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('call Utils.calculateNumber', () => {
    const spy = sinon.stub(utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 20);

    spy.restore();
  });
});
