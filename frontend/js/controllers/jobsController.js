angular.module('jetpathApp')
	.controller('JobsController', JobsController);

JobsController.$inject = ['$http', 'jobsFactory', '$timeout'];

function JobsController ($http, jobsFactory, $timeout){
	var self = this;

	self.all = [];
	self.newJob = {};

	self.getJobs = getJobs;
	self.postJob = postJob;
	getJobs();

	//SET UP $HTTP REQUEST TO GET ALL JOBS //
	function getJobs(){
		$http
			.get('http://localhost:3000/jobs')
			.then(function(response){
				self.all = response.data.jobs;
				// ALLOWS FILTER BY COUNTRIES
				self.countries = getUnique(self.all, 'country');
				self.selectedCountry = self.countries[0];
		});
	}
	// END //

		//SET UP TO FILTER BY COUNTRIES //
		function getUnique(arr, field) {
			var obj = {};
			arr.forEach(function(e){
				obj[e[field]] = true;
			});
			
			return Object.keys(obj).sort();
		}
		// END //

	function jobApply() {
		$http
			.patch('http://localhost:3000/jobs')
			.then(function(response){
				self.all = response.data.jobs;
		});
	}

	//SET UP TO TRANSITION BETWEEN PAGES //
	self.transition = function () {
		self.isTransitioning = true;
		$timeout(function () {
			self.isTransitioning = false;
		}, 100);
	};
	// END //

	//ALLOW EMPLOYERS TO POST JOBS //
	function postJob() {
		$http.post('http://localhost:3000/jobs', self.newJob)
			.then(function(response){
			console.log(response);
			getJobs();
		});
		self.newJob = {};
	};
	// END //

}
