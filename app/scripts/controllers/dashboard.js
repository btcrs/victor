'use strict';
angular.module('victor').controller('DashboardCtrl', function ($scope, dataService) {


  var inter = setInterval(function() {
    updateData();
  }, 5000);

  var updateData = function() {
  d3.json('scripts/services/data.json', function(data) {
    console.log(data)
      MG.data_graphic({
        title: "pH",
        data: data,
        full_width: true,
        height: 220,
        target: '#ufo-sightings',
        x_accessor: 'year',
        x_axis: false,
        y_accessor: 'sightings'
      });
    })
  }
  updateData();
})
