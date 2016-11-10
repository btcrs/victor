'use strict';
angular.module('victor', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ui.select', 'ngResource'])
  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/dashboard', '/dashboard/overview');
  $urlRouterProvider.otherwise('/login');
  $stateProvider.state('base', {
    abstract: true,
    url: '',
    templateUrl: 'views/base.html'
  }).state('login', {
    url: '/login',
    parent: 'base',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  }).state('dashboard', {
    url: '/dashboard',
    parent: 'base',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  }).state('overview', {
    url: '/overview',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/overview.html'
  });
});
