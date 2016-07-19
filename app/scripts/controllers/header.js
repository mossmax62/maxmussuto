'use strict';

/**
 * @ngdoc function
 * @name maxmussutoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the maxmussutoApp
 */
 angular.module('maxmussutoApp')
 .controller('HeaderCtrl', function ($scope,AuthService) {
 	

 	$scope.titulo="$$$";
 	$scope.logoutDisable=true;
 	
 	$scope.login=function(){
 		AuthService.login();
 		$scope.loginDisable=true;
 		$scope.logoutDisable=false;
 	};

 	$scope.logout=function(){
 		AuthService.logout();
 		$scope.loginDisable=false;
 		$scope.logoutDisable=true;

 	};

 });
