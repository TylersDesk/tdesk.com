'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('scoreCtrl', ['$scope',
  function($scope) {
    $scope.tscore = 0;

    $scope.addScore = function(plusNum) {
      //Get the new number
      var addThis = plusNum;
      $scope.tscore = $scope.tscore + plusNum;
      //console.log($scope);
    }

    //    var plusScore =  function($scope) {
    //        $scope.tscore++;
    //         //$scope.$apply();
    //      }

    //    setInterval(plusScore($scope), 100);

    // //   function countController($scope){



    //     var timer = setInterval(function(){
    //         $scope.tscore++;
    //         $scope.$apply();
    //         console.log($scope.countDown);
    //     }, 50);

    //     if($scope.tscore == 1000)
    //     {
    //      clearInterval(timer);
    //     }

    // }

    //countController($scope);

  }
])
  .controller('navCtrl', ['$scope', '$location',
    function($scope, $location) {

      $scope.currentview = "Welcome, what brings you to my site?";

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
  ]);