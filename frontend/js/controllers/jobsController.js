angular.module('jetpathApp')
	.controller('JobsController', JobsController);

JobsController.$inject = ['$http', 'jobsFactory'];

function JobsController ($http, jobsFactory){
	var self = this;

	self.all = [
	{name:'KTOWN Academy', title: 'Best job in Korea', description: 'We are an academy located in the bustling city of Seoul!', country: 'South Korea'},
	{name:'Shanghai Knowledge Group', title: 'Best job in China', description: 'We are an academy located in the bustling city of Shanghai!', country: 'China'},
	{name:'Bangkokdemy', title: 'Best job in Thailand', description: 'We are an academy located in the bustling city of Bangkok!', country: 'Thailand'},
	];

	// self.getJobs = getJobs;

	// // getJobs();

	// function getJobs(){
	// 	jobsFactory.query(function(data){
	// 		self.all = data;
	// 		console.log('hello!');
	// 	});
	// }

	return this;

}