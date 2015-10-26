angular.module('jetpathApp')
	.controller('JobsController', JobsController);

JobsController.$inject = ['$http', 'JobsFactory'];

function JobsController ($http, JobsFactory){

	var self = this;

	self.all = [];
	// {title: 'Best job in Korea', description: 'We are an academy located in the bustling city of Seoul!', country: 'South Korea'},
	// {title: 'Best job in China', description: 'We are an academy located in the bustling city of Shanghai!', country: 'China'},
	// {title: 'Best job in Thailand', description: 'We are an academy located in the bustling city of Bangkok!', country: 'Thailand'},
	// ];

	self.getJobs = getJobs;

	getJobs();

	function getJobs(){
		JobsFactory.query(function(data){
			self.all = data;
		});
	}
}