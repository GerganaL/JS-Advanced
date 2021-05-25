const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHEX');


describe('RGBtoHEX', () =>{
    it('converts black to hex', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('converts white to hex', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('converts red to hex', () => {
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
    });
    it('converts blue to hex', () => {
        expect(rgbToHexColor(0,0,255)).to.equal('#0000FF');
    });

    it('retun green to hex', () => {
        expect(rgbToHexColor(0,255,0)).to.equal('#00FF00');
    });


    //test overloading

    it('retun green2 to hex', () => {
        expect(rgbToHexColor(0,128,0)).to.equal('#008000');
    });

    //

    it('return undefined for string params', ()=>{
        expect(rgbToHexColor('a','b','c')).to.be.undefined;
    });

    it('return undefined for input below zero', ()=>{
        expect(rgbToHexColor(-2,5,155)).to.be.undefined;
    });

    it('return undefined for input below zero', ()=>{
        expect(rgbToHexColor(2,-5,155)).to.be.undefined;
    });

    it('return undefined for input below zero', ()=>{
        expect(rgbToHexColor(2,5,-155)).to.be.undefined;
    });

    it('return undefined for invalid input', ()=>{
        expect(rgbToHexColor(-1,354,-10)).to.be.undefined;
    });

    it('return undefined for input bigger than 255', ()=>{
        expect(rgbToHexColor(355,5,155)).to.be.undefined;
    });

});