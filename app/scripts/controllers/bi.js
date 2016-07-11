'use strict';

/**
 * @ngdoc function
 * @name maxmussutoApp.controller:BiCtrl
 * @description
 * # BiCtrl
 * Controller of the maxmussutoApp
 */
angular.module('maxmussutoApp')
  .controller('BiCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.titulo="Inteligencia de negocios aplicada."
  });
