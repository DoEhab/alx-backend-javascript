const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('on success', async () => {
    const response = await getPaymentTokenFromAPI(true);
    expect(response).to.be.an('object');
    expect(response).to.have.property('data', 'Successful response from the API');
  });

  it('on failure', async () => {
    const response = await getPaymentTokenFromAPI(false);
    expect(response).to.be.undefined;
  });
});