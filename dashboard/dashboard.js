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
    vm.chartData = []

    $http.get('https://raw.githubusercontent.com/mozilla/metrics-graphics/master/examples/data/fake_users1.json').then(function(data) {
      var count = 0

      var data_item = {
        labels: [],
        series: []
      };
      var row = []
      var series_tmp = []

      angular.forEach(data.data, function(item) {
        count += 1
        if (count < 15) {
          series_tmp.push(item.value / 100000)
          data_item.labels.push(moment(item.date).format('MMM D'))
        } else if (row.length < 3) {
          data_item.series.push(series_tmp)
          series_tmp = []
          row.push(data_item)
          data_item = {
            labels: [],
            series: [[]]
          };
          count = 0
        } else {
          data_item.series.push(series_tmp)
          series_tmp = []
          vm.chartData.push(row)
          row = []
          row.push(data_item)
          data_item = {
            labels: [],
            series: [[]]
          };
          count = 0
        }
      })
      console.log(vm.chartData)
    vm.dat = vm.chartData[1][1]
    console.log(vm.dat)
    })

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
