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
        console.log($scope);
      });

      $scope.showWork = function(workItem) {
        $scope.displaywork = workItem
      }
      //$scope.displaywork = 'web';
      

  }]);