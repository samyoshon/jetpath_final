angular.module('jetpathApp')
	.controller('JobsController', JobsController);

JobsController.$inject = ['$http', 'jobsFactory'];

function JobsController ($http, jobsFactory){
	var self = this;

	self.all = [];
	// {name:'KTOWN Academy', title: 'Best job in Korea', description: 'We are an academy located in the bustling city of Seoul! It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
	// country: 'South Korea', compensation: {low: 123, high: 345}, benefits: ['asdf', 'asdf', 'asdf', 'asdf'], qualifications: ['asdf', 'asdf', 'asdf', 'asdf'], preferences: ['asdf', 'asdf', 'asdf', 'asdf'], additional: 'Cool guy'},
	// {name:'Shanghai Knowledge Group', title: 'Best job in China', description: 'We are an academy located in the bustling city of Shanghai!', country: 'China'},
	// {name:'Bangkokdemy', title: 'Best job in Thailand', description: 'We are an academy located in the bustling city of Bangkok!', country: 'Thailand'},
	// ];

	//SET UP TO FILTER BY COUNTRIES //

	self.countries = getUnique(self.all, 'country');

	function getUnique(arr, field) {
		var obj = {};
    	
    	arr.forEach(function(e){
	    	obj[e[field]] = true;
	    });
		
		return Object.keys(obj).sort();
	};

	self.selectedCountry = self.countries[0];

	// END //








	self.getJobs = getJobs;

	getJobs();

	function getJobs(){
		jobsFactory.query(function(data){
			self.all = data;
			console.log('hello!');
		});
	}

	return this;

}