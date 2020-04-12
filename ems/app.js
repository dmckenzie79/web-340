/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   17 March 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates EJS layouts.
;===========================================
*/

// start program

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
var Employee = require("./models/employee");

// MongoDB compass connection
var mongoDB = 'mongodb+srv://dmck1979:Kirk1976@buwebdev-cluster-1-42fge.mongodb.net/test';

//create connection
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
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
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next){
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);


/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee[]
 * URL: localhost:8080
 */
app.get('/', function(req, res) {
    Employee.find({}, function(error, employees) {
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log(employees);
        res.render('index', {
          title: 'EMS | Home',
          employees: employees
        });
      }
    });
  });


/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(req, res) {
    res.render('new', {
      title: 'EMS | New'
    });
  });

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
    // console.log(request.body.txtName);
    if (!req.body.txtName) {
      res.status(400).send('Entries must have a name');
      return;
    }


// get the request's form data
var employeeName = req.body.txtName;
console.log(employeeName);

// create a employee model
var employee = new Employee({
    name: employeeName
});

// save
employee.save(function (error) {
    if (error) {
        console.log(error);
     throw error;
    } else {
    console.log(employeeName + " saved successfully!");
    res.redirect("/");
    }
  });
});

app.get("/list",function(req,res){
    Employee.find({},function(error,employees){
        if(error)throw error;
        
        res.render("list",{
            title:"Employee List",
            employees:employees
        });
    });
}); 

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
    var queryName = req.params['queryName'];
  
    Employee.find({'name': queryName}, function(error, employees) {
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log(employees);
  
        if (employees.length > 0) {
          res.render('view', {
            title: 'EMS | View',
            employee: employees
          });
        } else {
          res.redirect('/');
        }
      }
    });
  });

 
//create server
http.createServer(app).listen(8080, function() {
    console.log('Application has started and is listening on port 8080.');
});

//end program
