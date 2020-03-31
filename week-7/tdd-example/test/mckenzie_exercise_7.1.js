/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

//start program

//require statement
var assert = require("assert");

//test
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split(",")));
    });
});



function getFruits(str) {

    return str.split(',');

   }

   module.exports = getFruits;

//end program