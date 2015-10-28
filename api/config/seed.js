var Job = require('../models/Job.js');
var User = require('../models/User.js');

exports.seed = function seedJob() {

    Job.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
			Job.create({name: 'Korea Academy', title: 'Best job in Korea', description: 'We are an academy located in the bustling city of Seoul!', country: 'South Korea'});
			Job.create({name: 'Shanghai Academy', title: 'Best job in China', description: 'We are an academy located in the bustling city of Shanghai!', country: 'China'});
			Job.create({name: 'Bangkok Academy', title: 'Best job in Thailand', description: 'We are an academy located in the bustling city of Bangkok!', country: 'Thailand'});
        }
    });
};