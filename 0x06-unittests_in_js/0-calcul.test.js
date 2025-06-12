const assert = require('assert');
const calcNumber = require('./0-calcul');

describe('calculateNumber', () => { 
    it('fraction number', ()=>{
        assert.strictEqual(calcNumber(1.3, 1.7), 3);
    });
    it('fraction number', ()=>{
        assert.strictEqual(calcNumber(1.0, 1.0), 2);
    });
    it('round down', ()=>{
        assert.strictEqual(calcNumber(1.1, 1.3), 2);
    });
    it('round up', ()=>{
        assert.strictEqual(calcNumber(1.79, 1.89), 4);
    });
});