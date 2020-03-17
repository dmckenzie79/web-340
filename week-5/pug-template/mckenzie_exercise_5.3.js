/*
============================================
; Title:  pug-template.js
; Author: Professor Krasso
; Date:   17 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates the Pug view engine.
;===========================================
*/

//start program

// require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

// app functions
var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// route
app.get('/', function(req, res) {
    res.render('index', {
        message: 'He who laughs last laughs best. -Unknown'
    });
});

//create server
http.createServer(app).listen(8000, function() {
    console.log('Application started and listening on port 8000');
});


//end program