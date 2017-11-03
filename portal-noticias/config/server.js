var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(expressValidator());

consign()
    .include('app/routes') // adiciona as rotas no autoload
    .then('config/dbConnection.js') // adiciona o módulo de conexão no autoload
    .then('app/models') // adiciona os models no autoload
    .then('app/controllers') // adiciona os controllers no autoload
    .into(app);

module.exports = app;