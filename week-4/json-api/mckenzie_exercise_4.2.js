/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   9 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to return JSON from a Node.js server.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();


app.get("/customer/:id", function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: "Eddie",
    lastName: "Murphy",
    employeeId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started and is listening on port 8080");
});