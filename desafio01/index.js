'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Eu sou full cycle!');
});

app.listen(8080, function() {
  console.log('App de Exemplo escutando na porta 8000!');
});