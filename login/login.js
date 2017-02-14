'use strict';

angular.module('victor.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', function($scope, $location) {

  $scope.authenticationEndpoint = "https://43kmoq1cf2.execute-api.us-east-1.amazonaws.com/dev/authentication/"

  $scope.noLogin = function() {
     $location.path('/dashboard');
  };

  $scope.login = function(provider){
     window.location = ($scope.authenticationEndpoint + 'signin/' + provider)
  }

});
