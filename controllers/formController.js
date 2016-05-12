var app = angular.module('madLibApp');

app.controller('formController', function($scope, madLibService, $location) {
	$scope.saveInputs = function(inputs) {
		madLibService.saveData(inputs);
		$location.path('output');
	}
})