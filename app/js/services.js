'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1beta').

factory('scoreService', function() {

	var totalScore = 0;

    return {
        sayHello: function() {
            return "Hello, World!"
        },

        getScore: function() {
        	return totalScore;
        },

        setScore: function(addScore) {
        	totalScore = totalScore + addScore;
        }


    };
}).
factory('workService', function ($http) {
	var workItems;

	return {
		getWork : function() {

			$http.get('lib/datastore/work.js').success( function(data) {
				
				workItems = data;
				console.log(workItems);
				return data;
			});
				
		}, getItem : function() {
			return workItems;
		}
	}
}).factory('blogService',  ['$http', '$q',  function ($http, $q) {

	return {
		getBlog: function() {
			var deferred = $q.defer();

			$http.get('https://www.googleapis.com/blogger/v3/blogs/6690107699880631230/posts?key=AIzaSyC0pJ2Y7XMvsq7EkKSXLfoMJoluS7xU8ak').success(function (blogData){
				console.log(blogData.items);
				deferred.resolve(blogData.items);

			});

			return deferred.promise;
		}
	}
}]);
