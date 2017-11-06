var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/view');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Authorization all origin 
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    // next();
});

consign()
    .include('app/route')
    .then('app/model')
    .then('app/controller')
    .into(app);

module.exports = app;
