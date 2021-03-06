/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   9 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates CRUD operations in a Node.js API.
;===========================================
*/

//start program

//require statements for required libraries
var express = require("express");
var http = require("http");

var app = express();

//create GET request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

//create PUT request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

//create POST request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

//create DELETE request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

//port listening and logging
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

//end program