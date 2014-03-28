'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('scoreCtrl', ['$scope', 'scoreService', function($scope,scoreService) {
    
    //Both of the functions below talk to the TRUTH of the data.

    //Score Watching Function
    $scope.$watch(function () {
      return scoreService.getScore();
    }, function (score) {
      $scope.score = score;
      //console.log(score);
    });

    //Score Adding Function
    $scope.addScore = function(plusNum) {
      scoreService.setScore(plusNum);
    }
  }
])
.controller('navCtrl', ['$scope', '$location',
  function($scope, $location) {

    $scope.currentview = "Welcome to my digital dojo, what brings you friend?";

    $scope.loadView = function (view) {
      console.log('Loading View: ' + view);
      $scope.currentview = view;
      $location.path($scope.currentview); // path not hash
    }

  }
])
.controller('HomeCtrl', [
  function() {
    console.log('Firing Home');
  }
])
.controller('workCtrl', ['$scope', 'workService', function($scope,workService) {
      
    workService.getWork();

    $scope.$watch( function () {
      console.log('watching function');
      return workService.getItem();
    }, function (workcat) {
      console.log('when does this fire? only on change?');
      $scope.workcat = workcat;
      $scope.web = workcat.web;
      console.log($scope);
    });

    $scope.showWork = function(workItem) {
      $scope.displaywork = workItem
    }
    $scope.displaywork = 'web';
    

}])
.controller('bioCtrl', ['blogService', '$scope', function(blogService, $scope) {
  console.log('Firing Bio Ctrl');
  d3.select(".bio-container").append("p").text("This is Coming In from d3.js");

  $('.thing').waypoint(function(direction) {
    console.log('Top of thing hit top of viewport.', direction);
  });

  $('.side-nav').affix({
    offset: {
      top: 90
    }
  });

}])
.controller('learnCtrl', ['blogService', '$scope', function (blogService, $scope) {
  var blogPromise = blogService.getBlog();
  console.log();
  blogPromise.then(function(value) {
    $scope.blogItems = value;
  })
}]);