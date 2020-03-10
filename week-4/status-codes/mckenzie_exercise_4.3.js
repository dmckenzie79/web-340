/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   9 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to programmatically set Node.js status codes.
;===========================================
*/

//start program

//require statements for required libraries
var express = require("express");
var http = require("http");

var app = express();

//Path for routing if page not found
app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Error, Page not found."
  });
});

//Path for routing if page is OK
app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Everything is OK, Page loaded correctly."
  });
});

//Path for routing if page not implemented
app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Error, Page not implemented."
  });
});

//port listening and logging
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});

//end program