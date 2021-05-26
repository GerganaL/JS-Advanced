const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('check isOddOrEven', () => {
    it('Type  is String',()=>{
        assert.equal(isOddOrEven(1),undefined);
    });

    it('return even',()=>{
        assert.equal(isOddOrEven('ab'),'even');
    });

    it('return odd',()=>{
        assert.equal(isOddOrEven('a'),'odd');
    });

    it('return even when empty string',()=>{
        assert.equal(isOddOrEven(''),'even');
    });

});
