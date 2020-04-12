/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   31 March 2020
; Modified By: Diandra McKenzie
; Description: File for the Employee database model
;===========================================
*/

//start program

// Require statements
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define Employee Schema
var employeeSchema = new Schema({
  name: {type: String, required: true }
});

// define Employee Model
var Employee = mongoose.model("Employee", employeeSchema);
   
// Export the model so its publicly available.
module.exports = Employee;

//end program