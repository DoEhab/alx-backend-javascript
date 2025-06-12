const expect = require('chai').expect;
const calcNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Sum fraction numbers', () => {
    expect(calcNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('Subtract fraction numbers', () => {
    expect(calcNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
  });

  it('Divide fraction numbers (valid)', () => {
    expect(calcNumber('DIVIDE', 7.9, 2.1)).to.equal(4);
  });

  it('Divide by zero after rounding', () => {
    expect(calcNumber('DIVIDE', 1.2, 0.4)).to.equal('Error');
  });
});
