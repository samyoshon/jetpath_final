var mongoose = require('mongoose');

var Job = mongoose.Schema({
	name: String,
	title: String,
	description: String,
	country: String,
	compensation: [{
		low: Number,
		high: Number
	}],
	benefits: [],
	qualifications: [],
	preferences: [],
	additional: String
});

module.exports = mongoose.model('Job', Job);