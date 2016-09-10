(function () {
  'use strict';
  angular.module('app').service('tableService', ['$q',
    tableService
  ]);

  function tableService($q) {
    var tableData = [{
      component: 'Channel Temperature',
      progress: 100,
      status: 'Online',
      class: 'md-accent'
    }, {
      component: 'Ambient Temperature',
      progress: 'Online',
      status: 'Feedback',
      class: ''
    }, {
      component: 'Reservoir Temperature',
      progress: 100,
      status: 'Online',
      class: 'md-accent'
    }, {
      component: 'Solar',
      progress: 84,
      status: 'High',
      class: 'orange'
    }, {
      component: 'Power',
      progress: 100,
      status: 'Charging',
      class: 'md-accent'
    }, {
      component: 'PH',
      progress: 20,
      status: 'low',
      class: ''
    }, {
      component: 'Co2',
      progress: 1,
      status: 'lwo',
      class: 'md-warn'
    }, {
      component: 'Water Level',
      progress: 100,
      status: 'Done',
      class: 'md-accent'
    }, {
      component: 'Water Flow',
      progress: 100,
      status: 'Good',
      class: 'md-accent'
    }, {
      component: 'Humidity',
      progress: 100,
      status: 'High',
      class: 'md-accent'
    }];
    return {
      loadAllItems: function () {
        return $q.when(tableData);
      }
    };
  }
})();
