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

function calculateNumber(type, a, b) {
    if (type === 'SUM') return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
    return 'Error';
  }
  
  module.exports = calculateNumber;
  