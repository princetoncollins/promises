(function() {
	'use strict';

	angular
	  .module('promises')
	  .controller('Controller', Controller);

	  Controller.$inject = ['$scope', 'service', '$timeout', '$q'];

	  function Controller($scope, service, $timeout, $q) {

	  	var vm = this;
	  	vm.promiseResult = null;
	  	vm.callbackResult = null;

	  	// You may only call .then on a function, 
	  	// if we were not using $timeout service, 
	  	// then the add function would simply be returning
	  	// the sum of x and y, you cannot call .then on integers,
	  	// and thusly there would be an error served up in this case.

// PROMISES!

	  	// function add(x, y) {

	  	// 	var q = $q.defer()
	  	// 	var result = x + y;

	  	// 	if (typeof result === 'number') {
	  	// 		q.resolve(result);			
	  	// 	} else {
	  	// 		q.reject('There was an error.');
  		// 	}

	  	// 	return q.promise;
	  	// }

	  	// add(350, 5000)
	  	// 	.then(function(result) {
	  	// 		return add(result, 650);          // Result: 6000
	  	// 	})
	  	// 	.then(function(secondResult) {
	  	// 		return add(secondResult, 1000);    // Result: 7000
	  	// 	})
	  	// 	.then(function(thirdResult) {
	  	// 		return add(thirdResult, 3001);     // Result: 9001
	  	// 	})
	  	// 	.then(function(finalResult) {
	  	// 		vm.promiseResult = finalResult; // Returns final result after all addition.
	  	// 	})
	  	// 	.catch(function(error) {
	  	// 		console.log(error);
	  	// 		vm.error = error;
	  	// 		vm.promiseResult = "NaN";
	  	// 	});	


// CALLBACKS!

	  	function add(num1, num2, callback, errorCallback) {
	  		if (typeof num1 === 'number' && typeof num2 === 'number') {
	  			callback(num1 + num2);
	  		} else {
	  			var error = 'There was an error! And this is the error callback response.';
	  			errorCallback(error);
	  		}
	  	}

	  	add(350, 5000, function(result) {
	  		add(result, 250, function(secondResult) {
	  			add(secondResult, 400, function(thirdResult) {
	  				add(thirdResult, 3001, function(finalResult) {
	  					vm.callbackResult = finalResult;
	  				}, function(error) { /* Handle error here */ })
	  			}, function(error) { /* Handle error here */});
	  		}, function(error) { /* Handle error here */});
	  	}, function(error) { 
	  		/* Handle error here */ 
	  		if (error) { 
	  			vm.callbackResult = "NaN"; 
	  			vm.error = "There was an error."; 
	  		} 
	  	});

	  } // End Controller.
})();