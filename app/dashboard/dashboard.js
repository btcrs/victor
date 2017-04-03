'use strict';

angular.module('victor.dashboard', ['ngRoute', 'metricsgraphics', 'angular.filter', 'angularMoment'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardController'
    });
  }])

  .controller('DashboardController', function($scope, $interval, $timeout, $http, moment) {

    var vm = this
    vm.measurements = {} 
    vm.charts = {}

    $http.get('https://aadrsu3hne.execute-api.us-east-1.amazonaws.com/dev/datum').then(function(data) {
        console.log(data);

      var parameters = []
      angular.forEach(data.data, function(item) {
          parameters.push(item.parameter)
      })

      angular.forEach(new Set(parameters), function(item) {
         vm.measurements[item] = []
      })

      var colorSplit = {'red': [], 'blue': [], 'green':[], 'clear':[]}
      var colorConcatenated = []

      angular.forEach(data.data, function(item) {
        var d = new Date(item.createdAt)

        if(new String(item.parameter).valueOf() == new String("color").valueOf()){
          var colors = (item.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; }))
          angular.forEach(colors, function(color) {
              var value = color.split('=');
              var reading = {"value": value[1], "date": d}
              colorSplit[value[0]].push(reading)
          })
        }
        else if(isNumeric(item.value)){
          var reading = {"value": item.value, "date": d}
          vm.measurements[item.parameter].push(reading)
        }
        else{ console.log(new Date(item.createdAt).toString()); }
      })
      angular.forEach(colorSplit, function(color){
          colorConcatenated.push(color)
      })
      vm.measurements['color'] = colorConcatenated

      angular.forEach(vm.measurements, function(item, key) {

        vm.charts[key] = ({
          data: item,
          title: key,
          interpolate: d3.curveMonotoneX,
          color: '#f1367e',
          width: 650,
          height: 200,
          right: 40,
          x_accessor: 'date',
          y_accessor: 'value'
        })
      })
    })


   function isNumeric(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
   }

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
