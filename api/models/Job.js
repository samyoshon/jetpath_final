var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('../node_modules/bcrypt'));

var Job = mongoose.Schema({
	name: String,
	title: String,
	description: String,
	country: ['South Korea', 'China', 'Thailand', 'Chile', 'Vietnam'],
	city: String,
	compensation: [{
		low: String,
		high: String
	}],
	benefits: String,
	qualifications: String,
	preferences: String,
	additional: String,
	apply: String
});

module.exports = mongoose.model('Job', Job);