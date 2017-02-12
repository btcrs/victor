'use strict';

angular.module('victor', [
  'ngRoute',
  'victor.login',
  'victor.dashboard',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
