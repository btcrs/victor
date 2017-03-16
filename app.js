'use strict';

angular.module('victor', [
  'ngRoute',
  'angular-chartist',
  'angularMoment',
  'victor.login',
  'victor.dashboard',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
