var app = angular.module('madLibApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/form.html',
		controller: 'formController'
	});

	$routeProvider.when('/output', {
		templateUrl: 'partials/output.html',
		controller: 'outputController'
	});
});

$(document).ready(function() {
	$.backstretch("images/background.jpg");
});