var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// inclui o middleware body-parser
app.use(bodyParser.urlencoded({ extend: true }));

consign()
    .include('app/routes') // adiciona as rotas no autoload
    .then('config/dbConnection.js') // adiciona o módulo de conexão no autoload
    .then('app/models') // adiciona os models no autoload
    .into(app);

module.exports = app;