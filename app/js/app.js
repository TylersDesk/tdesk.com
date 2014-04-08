'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ngTouch',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.tylerdirectives',
  'myApp.controllers'
]).config([
  '$routeProvider',
    function ($routeProvider) {
      $routeProvider.when('/', { templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
      $routeProvider.when('/bio', {templateUrl: 'partials/bio.html', controller: 'bioCtrl'});
      $routeProvider.when('/work', {templateUrl: 'partials/work.html', controller: 'workCtrl'});
      $routeProvider.when('/curiosity', {templateUrl: 'partials/curiosity.html', controller: 'learnCtrl'});
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

