'use strict';

angular.module('victor', [
  'ngRoute',
  'angularMoment',
  'victor.login',
  'victor.control',
  'victor.dashboard',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
