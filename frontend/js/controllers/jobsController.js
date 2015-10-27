angular.module('jetpathApp')
	.controller('JobsController', JobsController);

JobsController.$inject = ['$http', 'jobsFactory'];

function JobsController ($http, jobsFactory){
	var self = this;

	self.all = [];

	self.getJobs = getJobs;
	getJobs();

	//SET UP $HTTP REQUEST TO GET ALL JOBS //

	function getJobs(){
		$http
			.get('http://localhost:3000/jobs')
			.then(function(response){
				self.all = response.data.jobs;
		});
	}

	// END //

	//SET UP TO FILTER BY COUNTRIES //

	self.countries = getUnique(self.all, 'country');

	function getUnique(arr, field) {
		var obj = {};
		arr.forEach(function(e){
			obj[e[field]] = true;
		});
		
		return Object.keys(obj).sort();
	}

	self.selectedCountry = self.countries[0];

	// END //

	function jobApply() {
		$http
			.patch('http://localhost:3000/jobs')
			.then(function(response){
				self.all = response.data.jobs;
		});
	}

}
