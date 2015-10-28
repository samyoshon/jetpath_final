var mongoose = require('mongoose');

var User = mongoose.Schema({
	firstname: String,
	lastname: String,
	gender: String,
	birthdate: String,
	nationality: String,
	resume: String,
	photo: String,
	skypeid: String,
	saved_jobs: []
});

module.exports = mongoose.model('User', User);