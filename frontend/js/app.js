angular
	.module('jetpathApp', ['ngResource', 'ui.router'])
	.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRouter($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('jobs', {
			url: '/jobs',
			templateUrl: 'job.html',
			// controller: "jobsController"
		})
		.state('saved', {
			url: '/jobs/saved',
			templateUrl: 'saved.html',
			// controller: "jobsController"
		})
		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		});
}