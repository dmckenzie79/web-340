/*
============================================
; Title:  welcome.js
; Author: Professor Krasso
; Date:   19 February 2020
; Modified By: Diandra McKenzie
; Description: Demonstrates how to create a Node.js server
;===========================================
*/

const http = require('http');

function processRequest(req, res) {
  const body = 'Welcome! Come in and stay a while.';

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);