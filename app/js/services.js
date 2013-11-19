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
});
