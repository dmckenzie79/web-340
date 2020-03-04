/*
============================================
; Title:  putting-it-all-together.js
; Author: Professor Krasso
; Date:   4 March 2020
; Modified By: Diandra McKenzie
; Description: Base server configurations for a fully working Express application.
;===========================================
*/

//start program

//require statements for required libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');


var app = express();

//set the views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));



//Path for routing to the home page
app.get("/", function(request, response) {
  response.render("index", {
    message: "Home Page"
  });
});

//Path for routing to the about page
app.get("/about", function(request, response) {
  response.render("about", {
    message: "About Page"
  });
});

//Path for routing to the contact page
app.get("/contact", function(request, response) {
  response.render("contact", {
    message: "Contact Page"
  });
});

//Path for routing to the products page
app.get("/products", function(request, response) {
  response.render("products", {
    message: "Products Page"
  });
});

//port listening and logging
http.createServer(app).listen(8080, function() {
  console.log("Application started on port %s", 8080);
});

//end program