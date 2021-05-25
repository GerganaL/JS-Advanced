const sum = require('./myModule');
const {expect, assert} = require('chai');


// describe('Sum function', () => {
//     it('works', ()=>{

//     })
// });

describe('Sum function', () => {
    it('works', () =>{
            expect(sum(1,2)).to.equal(3);
    })

    it('works with assert', () =>{
       assert(sum(2,3),5);
})
});