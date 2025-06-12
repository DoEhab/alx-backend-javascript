const assert = require('assert');
const calcNumber = require('./0-calcul');

describe('calculateNumber', () => { 
    it('', ()=>{
        assert.strictEqual(calcNumber(1.3, 1.7), 3);
    });
});