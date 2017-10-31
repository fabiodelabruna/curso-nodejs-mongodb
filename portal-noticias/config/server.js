var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes') // adiciona as rotas no autoload
    .then('config/dbConnection.js') // adiciona o módulo de conexão no autoload
    .into(app);

module.exports = app;