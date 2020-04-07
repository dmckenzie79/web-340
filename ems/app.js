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
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("../ems/models/employee");

// MongoDB compass connection
var mongoDB = 'mongodb+srv://dmck1979:Kirk1976@buwebdev-cluster-1-42fge.mongodb.net/test';

//create connection
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise - global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to MongoDB instance");

});

//setup csurf protection
var csrfProtection = csrf({cookie: true});

//app functions
var app = express();

//use statements
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next){
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

//set statements
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res) {
    res.render('index', {
        title: "Homepage"
    });
});

app.get('/', function(req, res) {
    res.render('index',{
        message: "XSS Prevention Example"
    });
});

app.get('/', function(req, res) {
    res.render('index', {
        message: "New Fruit Entry Page"
    });
});

app.post('/process', function(req, res) {
    console.log(req.body.txtName);
    res.redirect('/');
});


//model
var Employee = new Employee({
    firstName: "John",
    lastName: "Smith"
});

//create server
http.createServer(app).listen(8080, function() {
    console.log('Application has started and is listening on port 8080.')
});

//end program
