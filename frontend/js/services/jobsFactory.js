angular.module('jetpathApp')
	.factory('JobsFactory', JobsFactory);

JobsFactory.$inject = ['$resource'];

function JobsFactory($resource) {

	var JobsResource = $resource('http://localhost:3000/jobs/:id',
		{id: '@_id'},
		{'update': {method: 'PATCH'}}
	);

	return JobsResource;
}