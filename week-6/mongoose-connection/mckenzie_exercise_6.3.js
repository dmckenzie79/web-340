/*
============================================
; Title:  mongoose-connection.js
; Author: Professor Krasso
; Date:   24 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates connection to MongoDB.
;===========================================
*/

//start program

//require statements
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

//verify database connection
var mongoDB = 'mongodb+srv://dmck1979:Kirk1976@buwebdev-cluster-1-42fge.mongodb.net/test';

//create connection
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise - global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to MongoDB instance');
});

//app functions
var app = express();
app.use(logger('dev'));

//create server
http.createServer(app).listen(5000, function () {
    console.log('Application started and listening on port 5000.');
});


//end program