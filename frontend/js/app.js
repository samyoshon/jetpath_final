angular
	.module('jetpathApp', ['ngResource', 'ui.router'])
	.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRouter($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		})
		.state('jobs', {
			url: '/jobs',
			templateUrl: 'job.html',
			// controller: "jobsController"
		})
		// .state('saved', {
		// 	url: '/jobs/saved',
		// 	templateUrl: 'saved.html',
		// 	// controller: "jobsController"
		// })
		.state('new', {
			url: '/new',
			templateUrl: 'new.html',
			// controller: "jobsController"
		})
		// .state('candidates', {
		// 	url: '/candidates',
		// 	templateUrl: 'candidates.html',
		// 	// controller: "jobsController"
		// })
		// .state('applicants', {
		// 	url: '/applicants',
		// 	templateUrl: 'applicants.html'
		// })
		.state('login', {
			url: '/login',
			templateUrl: 'login.html'
		});
}