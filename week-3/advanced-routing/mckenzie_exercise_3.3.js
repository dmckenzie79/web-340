/*
============================================
; Title:  advanced-routing.js
; Author: Professor Krasso
; Date:   4 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates advanced routing
;===========================================
*/

//require statements for required libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//set the views
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

//path for routing, append a value 
app.get('/:employeeId', function(request, response) {
    
    var employeeId = parseInt(request.params.employeeId, 10);

    response.render('index', {
        employeeId: employeeId
    });
});

//port listening and logging

http.createServer(app).listen(3001, function() {
    console.log('Application started and is listening on port %s', 3001);
});

//end program