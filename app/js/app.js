'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).config([
  '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/', { controller: 'HomeCtrl'});
      $routeProvider.when('/bio', {templateUrl: 'partials/bio.html', controller: 'MyCtrl1'});
      $routeProvider.when('/work', {templateUrl: 'partials/work.html', controller: 'workCtrl'});
      $routeProvider.when('/curiosity', {templateUrl: 'partials/curiosity.html', controller: 'MyCtrl1'});
      $routeProvider.otherwise({redirectTo: '/'});
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

