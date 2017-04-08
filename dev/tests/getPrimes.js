(function() { 'use strict';

describe("Determine the sequence of an array of numbers: ", function() {
    describe("Case for an empty array", function() {  
    it("should return `undefined` for an empty array", function() {
	expect(getPrimes()).not.toBeUndefined();});}
	);

describe("Determine the sequence of an array of numbers: ", function() {
    describe("Case for an empty array", function() {  
    it("should return `Error! String provided, intergers Expected` for an empty array", function() {
	expect(getPrimes()).toBeDefined();});}
	);

describe("Determine the sequence of an array of numbers: ", function() {
	it("should return `[2, 3, 5, 7, 11]` for [2, 3, 5, 7, 11]", function() { 
    expect(getPrimes(12)).toEqual([2, 3, 5, 7, 11]);      }); })
	it("should return `[2, 3, 5, 7, 11, 13]` for [2, 3, 5, 7, 11, 13]", function() {        
	expect(getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);      }); 
    it("should return `[ 2, 3, 5, 7, 11, 13, 17, 19, 23]` for [ 2, 3, 5, 7, 11, 13, 17, 19, 23]", function() {        
	expect(getPrimes(24)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23]);      });
}); }); })();
