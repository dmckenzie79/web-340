/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   9 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to return JSON from a Node.js server.
;===========================================
*/

//start program

//require statements for required libraries
var express = require("express");
var http = require("http");

var app = express();

//Path for routing to the customer id
app.get("/customer/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Eddie",
    lastName: "Murphy",
    employeeId: id
  });
});

//port listening and logging
http.createServer(app).listen(8080, function() {
  console.log("Application started and is listening on port 8080");
});

//end program