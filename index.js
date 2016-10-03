// An AngularJS module defines an application.
// The module is a container for the different parts of an application.
// The module is a container for the application controllers.
// Controllers always belong to a module. 


// creating a new module
var app = angular.module('myApp', []);
app.controller('MainController', ['$scope', '$http', function($scope, $http){
	// The AngularJS $http service makes a request to the server, and returns a response.
	// .get methiod is a shortcut methd of the $http service. In this case we are getting the topspots.json file.
	$http.get('topspots.json').then(function (response){
		$scope.topspots = response.data.topspots ;



		});
	}]);