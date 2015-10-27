var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var passport   = require("passport");
var mongoose = require('mongoose');
var routes = require('./config/routes');

mongoose.connect('mongodb://localhost:27017/jetpath');

require('./config/seed.js').seed();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(routes);

app.listen(3000);