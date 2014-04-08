angular.module('myApp.tylerdirectives', []).
directive('workItem', function($compile){
    return {
      restrict:'E',
      replace:true,
      templateUrl: '/partials/directives/workitem.html',
      scope: {
      	workitem : "=",
      	displaythis : "=",
      	animatein : "&"
      }

    }
  });