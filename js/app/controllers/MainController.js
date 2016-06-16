function MainController($scope){
	$scope.name = "minh";
	$scope.email = "mhnguyen289@gmail.com";
	$scope.phone = "510-468-5383";

}

angular
	.module('app')
	.controller('MainController', MainController);