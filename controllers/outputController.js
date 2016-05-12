var app = angular.module('madLibApp');

app.controller('outputController', function($scope, madLibService) {
	$scope.madLibInsert = madLibService.getData();
});