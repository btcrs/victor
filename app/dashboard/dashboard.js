'use strict';

angular.module('victor.dashboard', ['ngRoute', 'angular-chartist', 'angularMoment'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardController'
    });
  }])

  .controller('DashboardController', function($scope, $interval, $timeout, $http, moment) {

    var vm = this
    vm.measurements = {} 

    $http.get('https://43kmoq1cf2.execute-api.us-east-1.amazonaws.com/dev/datum').then(function(data) {
      console.log(data)
      var count = 0

      var data_item = {
        labels: [],
        series: []
      };

      var parameters = []
      angular.forEach(data.data, function(item) {
          //parameter.push(moment(item.date).format('MMM D'))
          parameters.push(item.parameter)
      })

      angular.forEach(new Set(parameters), function(item) {
          console.log(item)
         vm.measurements[item] = {labels: [], series: [[]]} 
      })

      angular.forEach(data.data, function(item) {
        if(String(item.paramter) === "color"){
          console.log(item.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; }))
        }
        else if(isNumeric(item.value)){
          var reading = {"value": item.value, "time":moment(item.createdAt).format('MM DD h:mm:ss')}
          vm.measurements[item.parameter].labels.push(reading.time)
          vm.measurements[item.parameter].series[0].push(reading.value)
        }
        else{ }
      })
      console.log(vm.measurements)

      angular.forEach(measurements, function(item) {
        item.labels = item.labels.slice(Math.max(arr.length - 15, 1))
        item.series[0]= item.series[0].slice(Math.max(arr.length - 15, 1))
      })
    })

   function isNumeric(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
   }

    vm.dat = {labels: [''], series: [[0]]}

    vm.chartOptions = {
      axisX: {
        divisor: 4
      },
      showArea: true,
    };

    var apiEntry = 'https://43kmoq1cf2.execute-api.us-east-1.amazonaws.com/dev/datum'

    $http({
      method: 'GET',
      url: apiEntry,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {
      $scope.data = response
    }, function errorCallback(response) {
      console.log(response)
    });

    var config = {
      headers: {
        'Authorization': 'Basic'
      }
    }

    var entry = {
      parameter: "temperature",
      value: "25.2",
    }

    if ($scope.authorized) {
      $http.post(apiEntry, data, config).then(function successCallback(response) {
        console.log(response)
      }, function errorCallback(response) {
        console.log(response)
      });
    }

  });
