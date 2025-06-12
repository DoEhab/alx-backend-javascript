const assert = require('assert');
const calcNumber = require('./1-calcul');

describe('calculateNumber', () => { 
    it('Sum fraction number', ()=>{
        assert.strictEqual(calcNumber('SUM', 1.4, 4.5), 6);
    });
    it('Subtract fraction number', ()=>{
        assert.strictEqual(calcNumber('SUBTRACT', 4.5, 1.4), 4);
    });
    it('Divide fraction', ()=>{
        assert.strictEqual(calcNumber('DIVIDE', 7.9, 2.1), 4);
    });
    it('Divide fraction', ()=>{
        assert.strictEqual(calcNumber('DIVIDE', 1.2, 0.4), 'Error');
    });
});