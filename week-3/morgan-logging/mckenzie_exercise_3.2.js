
//require statements for required libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

//set the views
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'The Morgan Logger is functioning!'
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port %s ', 3000);
});