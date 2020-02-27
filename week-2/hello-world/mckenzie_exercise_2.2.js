/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   26 February 2020
; Modified By: Diandra McKenzie
; Description: Creates a new server and  listens on port 8080.
;===========================================
*/

//start program

//requirements
var express = require('express');
var http = require('http');

//calls the express function to start a newExpress application
var app = express();

//node routing request and response
app.use(function(req, res) 
{
  console.log('In comes a request to: %s', req.url);
  
  res.end('Hello World\n');
})

//starts the server on designated port
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});

//end program