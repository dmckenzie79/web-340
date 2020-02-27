/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   26 February 2020
;Modified By: Diandra McKenzie
; Description: Demonstrates Express route behaviors
;===========================================
*/

//start program

//requirements
var express = require('express');
var http = require('http');

//calls the express function to start a newExpress application
var app = express();

//routes
app.get('/', function(req, res)
{
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res)
{
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res)
{
    res.end('Welcome to the contact page.\n');
});

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n');
});

//starts the server on designated port
http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});

//end program