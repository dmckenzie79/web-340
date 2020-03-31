/*
============================================
; Title:  fruits.js
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

//start program

//require statements
var fruits = require("../mckenzie-fruit.js");

//app functions
var chai = require("chai");
var assert = chai.assert;

//test 
describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});


//end program