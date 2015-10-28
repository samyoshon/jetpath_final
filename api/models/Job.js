var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('../node_modules/bcrypt'));

var Job = mongoose.Schema({
	name: String,
	title: String,
	description: String,
	country: String,
	address: String,
	compensation: [{
		low: Number,
		high: Number
	}],
	benefits: String,
	qualifications: String,
	preferences: String,
	additional: String,
	admin: [],
	applicants: []
});

module.exports = mongoose.model('Job', Job);