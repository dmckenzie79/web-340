/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   9 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to programmatically set Node.js status codes.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Error, Page not found."
  });
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Everything is OK, Page loaded correctly."
  });
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Error, Page not implemented."
  });
});

http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});