'use strict';

angular.module('victor')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
      $location.path('/dashboard');
      return false;
    }

  });
