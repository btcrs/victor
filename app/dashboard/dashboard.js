'use strict';

angular.module('victor.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardController'
  });
}])

.controller('DashboardController', function($scope, $http) {

  var apiEntry = 'https://43kmoq1cf2.execute-api.us-east-1.amazonaws.com/dev/datum'

  $http({
   method: 'GET',
   url: apiEntry
  }).then(function successCallback(response) {
    $scope.data = response
    console.log($scope.data)
  }, function errorCallback(response) {
      console.log(response)
  });

  var config = {headers: {'Authorization': 'Basic'}}

  var entry = {
      parameter: "temperature",
      value: "25.2",
  }

  if($scope.authorized){
    $http.post(apiEntry, data, config).then(function successCallback(response) {
      console.log(response)
    }, function errorCallback(response) {
      console.log(response)
    });
  }

});
