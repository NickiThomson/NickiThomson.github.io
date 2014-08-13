var app = angular.module('nickiApp');
	
app.controller('resumeController', function($scope){
		$scope.categories = {

		};

		$scope.activate = function (category){
			console.log(category);
			$scope.categories[category] = !$scope.categories[category];
			console.log($scope.categories);
		}
});