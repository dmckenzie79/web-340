/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   17 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates EJS layouts.
;===========================================
*/

// star program

//require
var express = require('express');
var html = require('html');
var path = require('path');
var logger = require('morgan');

//app functions
var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));

app.get('/', function(req, res) {
    res.render('index', {
        title: Homepage
    });
});

//create server
html.createServer(app).listen(8080, function() {
    console.log('Application has started and is listening on port 8080.');
});

//end program
