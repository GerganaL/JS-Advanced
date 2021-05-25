const { expect } = require('chai');
const isSymmetric = require('./CheckSymmetry');

describe('isSymteric', () => {

    it('returns true for valid symetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('returns false for valid non-symetric imput', () => {
        expect(isSymmetric([2,1])).to.be.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    // test overloading
    it('returns true for valid symetric odd elemnt array', () => {
        expect(isSymmetric([1, 1,1])).to.true;
    });

    it('returns false fro type-coerced elements', () => {
        expect(isSymmetric([1,'1'])).to.be.false;
    })

    it('returns true for valid symetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.true;
    });

    it('returns false for valid non-symetric string input', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('returns false for invalid argument number', () => {
        expect(isSymmetric(1)).to.be.false;
    });
});