// 'use strict'

require('dotenv').load();

var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var passport   = require('passport');
var mongoose = require('mongoose');
var routes = require('./config/routes');
var Promise = require('bluebird');
var credentials = require('./config/credentials.js');
var dbConfig = require('./db/config.js');
var port = (process.env.PORT || 3000);

mongoose.connect('mongodb://localhost:27017/jetpath');

require('./config/seed.js').seed();

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( require('cookie-parser')( credentials.cookieSecret));
app.use( require('express-session')({ resave: false, saveUninitialized: false, secret: credentials.cookieSecret }));

// switch(app.get('env')){
//     case 'development':
//         mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options);
//         break;
//     case 'production':
//         mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options);
//         break;
//     default:
//         throw new Error('Unknown execution environment: ' + app.get('env'));
// }

app.use(routes);

app.listen(port);