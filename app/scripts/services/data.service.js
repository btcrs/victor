'use strict';
angular.module('victor').factory('dataService', function ($timeout, $http) {
    var data = {}
    var poller = function() {
        d3.json("/scripts/services/data.json", function(r) {
            data = r;
        });
        $timeout(poller, 10000);
      }
    poller();

    return {
      data: data
    };
  });
