angular.module('jetpathApp')
	.controller('UsersController', UsersController);

UsersController.$inject = ['$http', 'jobsFactory', '$timeout'];

function UsersController ($http, jobsFactory, $timeout){
	var self = this;

	self.all = [];
	self.newUser = {};

	self.getUsers = getUsers;
	self.registerUser = registerUser;
	getUsers();

	//SET UP $HTTP REQUEST TO GET ALL JOBS //
	function getUsers(){
		$http
			.get('http://localhost:3000/users')
			.then(function(response){
				self.all = response.data.users;
		});
	}
	// END //

	//SET UP TO TRANSITION BETWEEN PAGES //
	self.transition = function () {
		self.isTransitioning = true;
		$timeout(function () {
			self.isTransitioning = false;
		}, 100);
	};
	// END //

	//ALLOW EMPLOYERS TO POST JOBS //
	function registerUser() {
		$http.post('http://localhost:3000/users', self.newUser)
			.then(function(response){
			console.log(response);
			getUsers();
		});
		self.newUser = {};
	}
	// END //

}
