/*
============================================
; Title:  url-module.js
; Author: Professor Krasso
; Date:   17 February 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

// start program

var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program