'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope, $location) {
  $scope.submit = function() {
   $location.path('/dashboard');
   return false;
 };
});
