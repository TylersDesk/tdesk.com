'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).config([
  '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
      $routeProvider.when('/bio', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
      $routeProvider.when('/work', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
      $routeProvider.when('/curiosity', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
      $routeProvider.otherwise({redirectTo: '/home'});
    }]
);

// //OR

// .config(function ($routeProvider, $locationProvider) {
//   $routeProvider.
//     when('/', {
//       templateUrl: 'partials/home.html',
//       controller: 'HomeCtrl'
//     }).
//     when('/caption/:captionID', {
//       templateUrl: 'partials/caption.html',
//       controller: 'captionCtrl'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });

//   $locationProvider.html5Mode(true);
// });

