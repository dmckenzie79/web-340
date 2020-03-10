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

//Path for routing GET request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

//Path for routing PUT request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

//Path for routing POST request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

//Path for routing DELETE request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

//port listening and logging
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});

//end program