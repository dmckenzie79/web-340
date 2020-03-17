/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   17 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

//require
var express = require('express');
var http = require('http');
var path = require('path');

//app functions

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//local artist array
var artists = [
    'Dali',
    'Basquiat',
    'Sherald',
    'Munch'
];

//routes
app.get('/', function(req, res) {
    res.render('index', {
        names: artists
    });
});

//create server
http.createServer(app).listen(3000, function() {
    console.log('Application started and is listening on port 3000')
});