'use strict';

/**
 * @ngdoc overview
 * @name maxmussutoApp
 * @description
 * # maxmussutoApp
 *
 * Main module of the application.
 */
angular
  .module('maxmussutoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase',
    'ngMaterial',
    'ngMessages',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider,$mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/bi', {
        templateUrl: 'views/bi.html',
        controller: 'BiCtrl',
        controllerAs: 'bi'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pelis', {
        templateUrl: 'views/pelis.html',
        controller: 'PelisCtrl',
        controllerAs: 'pelis'
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
  })
.run(function($rootScope){
  $rootScope.max="Max Mussuto App";
  $rootScope.user=null;

});
  


