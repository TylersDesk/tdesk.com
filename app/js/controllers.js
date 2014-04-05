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
    }, function () {
      console.log('when does this fire? only on change?');
      $scope.work = workService.getItem();
    });

    $scope.showWork = function(workItem) {
      $scope.displaywork = workItem
    }
    $scope.displaywork = 'web';
    

}])
.controller('bioCtrl', ['blogService', '$scope', function(blogService, $scope) {
  console.log('Firing Bio Ctrl');

  $scope.tyslide = 0;
  $scope.moveSlide = function() {
    $scope.move = {
      right: $scope.tyslide + 'px',
    }

    if ($scope.tyslide >= 50) {
      $('.supporting-text').fadeOut();
    } else {
      $('.supporting-text').fadeIn();
    }
  };


  // var dataset = [ 5, 10, 15, 20, 25 ];

  // // Update…
  // var p = d3.select("body").selectAll("p")
  //     .data(dataset)
  //     .text(function(d) { 
  //       return d 
  //     });

  // // Enter…
  // p.enter().append("p")
  //     .text(String);

  // // Exit…
  // p.exit().remove();

  

  // var myd3 = d3.select(".bio-container").selectAll("div")
  //   .data(dataset)
  //   .enter()
  //   .append("div")
  //   .style( "color", function(d) {
  //     if (d > 15) {
  //       return "red";
  //     } else {
  //       return "blue";
  //     }
  //   }).classed("bar", true)
  //   .style("height", function(d) {
  //     d = d * 5;
  //     return d + "px";
  //   });

  // $scope.changeData = function() {
  //   dataset = [12, 31, 32 ,43, 54, 10, 4, 12, 20];

  //   d3.select(".bio-container").selectAll("div")
  //   .data(dataset)
  //   .append("div")
  //   .classed("bar", true)
  //   .style("height", function(d) {
  //     d = d * 5;
  //     return d + "px";
  //   });

  //   console.log(d3.selectAll('.bio-container div'));
  // }

  // //d3.select(".bio-container").append("p").text("This is Coming In from d3.js");

  // $('.thing').waypoint(function(direction) {
  //   console.log('Top of thing hit top of viewport.', direction);
  // });

  // $('.side-nav').affix({
  //   offset: {
  //     top: 90
  //   }
  // });

}])
.controller('learnCtrl', ['blogService', '$scope', function (blogService, $scope) {
  var blogPromise = blogService.getBlog();
  console.log();
  blogPromise.then(function(value) {
    $scope.blogItems = value;
  })
}]);