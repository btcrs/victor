'use strict';

angular.module('victor.control', ['ngRoute', 'angular.filter'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/control', {
      templateUrl: 'control/control.html',
      controller: 'ControlController'
    });
  }])

  .controller('ControlController', function($scope, $interval, $timeout, $http, moment) {
    var vm = this

  });
