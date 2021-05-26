const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', ()=>{
    it('number for first parameter', ()=>{
        assert.isUndefined(lookupChar(1,0));
    });
    it('second parameter char', ()=>{
        assert.isUndefined(lookupChar('abc','b'));
    });
    it('second parameter double', ()=>{
        assert.isUndefined(lookupChar('abcd',1.8));
    });

    it('second parameter out of bounds', ()=>{
        assert.equal(lookupChar('abcd',-5),'Incorrect index');
    });

    it('second parameter out of bounds', ()=>{
        assert.equal(lookupChar('abcd',10),'Incorrect index');
    });

    it('correct input', ()=>{
        assert.equal(lookupChar('abcd',0),'a');
        assert.equal(lookupChar('abcd',2),'c');
    });
});