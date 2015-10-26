var mongoose = require('mongoose');

var Job = mongoose.Schema({
	title: String,
	description: String,
	country: String
});

module.exports = mongoose.model('Job', Job);