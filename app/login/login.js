'use strict';

angular.module('victor.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', function($scope, $location) {
  $scope.submit = function() {
     $location.path('/dashboard');
   };
});
