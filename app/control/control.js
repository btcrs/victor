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
    vm.submitForm = function() {
     var data = {
        "command": vm.command,
        "parameter": vm.parameter,
        "otp": vm.otp
     }
     console.log(data)
     var config = {
       headers : {
         'Content-Type': 'application/json'
       }
     }

     $http.post('https://aadrsu3hne.execute-api.us-east-1.amazonaws.com/dev/datum/relay.relay', data, config)
     .success(function (data, status, headers, config) {
         $scope.PostDataResponse = data;
     }).error(function (data, status, header, config) {
         console.log("Bad Response")
     });
    };
  });
