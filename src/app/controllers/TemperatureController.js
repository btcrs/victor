(function () {
  angular.module('app').controller('TemperatureController', [
    TemperatureController
  ]);

  function TemperatureController() {
    var vm = this;
    // TODO: move data to the service
    vm.TemperatureChartData = [{
      key: 'Reservoir',
      y: 86
    }, {
      key: 'Channel',
      y: 89
    }, {
      key: 'Ambient',
      y: 90
    }];
    vm.chartOptions = {
      chart: {
        type: 'pieChart',
        height: 210,
        donut: true,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        valueFormat: (d3.format(".0f")),
        color: ['rgb(0, 150, 136)', '#E75753', 'rgb(200, 200, 0)'],
        showLabels: false,
        showLegend: false,
        title: 'Temps',
        margin: {
          top: -10
        }
      }
    };
  }
})();
