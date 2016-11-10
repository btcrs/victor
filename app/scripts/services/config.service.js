'use strict';
angular.module('victor').factory('configsService', function ($http) {
  var myService = {
    async: function () {
      var promise = $http.get('http://127.0.0.1:5000/configs').then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return myService;
});
