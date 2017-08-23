(function() {
	'use strict';

	angular
	  .module('promises')
	  .controller('Controller', Controller);

	  Controller.$inject = ['$scope', 'service', '$timeout', '$q'];

	  function Controller($scope, service, $timeout, $q) {

	  	var vm = this;

	  	vm.modifyList = modifyList;
	  	vm.add = add;
	  	vm.promiseAdd = promiseAdd;

	  	vm.groceryList = ['Popsicle', 'Hotdog', 'Breadslice', 'Toothpick', 'Rubberband', 'Yacht', 'Bun'];
	  	vm.promiseGroceryList = ['Broccoli', 'Shower Cap', 'Pickled eggs', 'Canned cheese', 'Crackers', 'Taco shell', '']

	  	function modifyList(item, callback) {
			callback(item);
	  	}

	  	function add(item) {
		  		if (vm.groceryList.indexOf(item) === -1) {
		  			vm.groceryList.push(item);
		  			console.log("Added item.")
		  			console.log("Grocery list updated.", vm.groceryList);
		  		} else {
		  			console.log("Item already exists.")
		  			// return;
		  		}
	  	}

	  	function checkItem(item) {
	  			vm.itemToAdd;
	  			console.log(item);
	  			if (vm.groceryList.indexOf(item) === -1 || vm.promiseGroceryList.indexOf(item) === -1) {
	  			    vm.itemToAdd = item;
	  				console.log("Not in the array yet.", vm.itemToAdd);
	  			} else {
	  				console.log("Item already exists.", vm.itemToAdd);
	  			}
	  			console.log("Item to add.", vm.itemToAdd);
	  			return vm.itemToAdd;
	  	}

	  	function promiseAdd(item) {
	  		console.log(item);
	  		checkItem(item)
	  		.then(function(response) {
	  			console.log(response);
	  			// return response;
	  		});
	  	}



	  }

})();