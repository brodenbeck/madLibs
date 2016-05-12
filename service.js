var app = angular.module('madLibApp');

app.factory('madLibService', function() {

	var madLibInputs = {};

	function saveData(inputs){
		madLibInputs = inputs;
	}

	function getData() {
		return madLibInputs;
	}

	return {
		saveData: saveData,
		getData: getData
	}
});