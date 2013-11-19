'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('score', function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'partials/score.html',
  		replace: true,
  		scope: {
  			score: "="
  		},
   		link: function(scope, element, attrs) {
  			
  	// 		var realScore = scope.score;

  	// 		console.log(scope.score);
  	// 		console.log(element[0].childNodes[1].childNodes[0].childNodes[0].data);

  	// 		// while (i < scope.score){
  	// 		// 	window.setTimeout( function() {
  	// 		// 		
	  // 		// 		i++;
  	// 		// 	}, 10);
  	// 		// }


  	// 		function doSetTimeout(i) {
			//   setTimeout(function() { 
			// 	element[0].childNodes[1].childNodes[0].childNodes[0].data = i;
	  // 			//scope.score = i;
	  // 			//console.log(i);	
			//   }, 1000);
			// }

			// for (var i = 1; i <= realScore; ++i) {
			//   doSetTimeout(i);
		 //    }
  		}
  	}
  }).
  directive('welcome', function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: {
        message : "="
        //currentview : "&"
      }, // {} = isolate, true = child, false/undefined = no change
      // cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<div class="welcome"></div>',
      // templateUrl: '',
       replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {
        console.log(iAttrs);
        console.log($scope);
        iElm.html($scope.message);
        $scope.$watch('message', function(newValue, oldValue) {
                if (newValue)
                  console.log("I see a data change!");
                  iElm.addClass('dissapear');
                  iElm.html($scope.message);
            }, true);
        //console.log($scope);
      }
    };
  });