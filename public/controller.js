(function() {
	'use strict';

	angular
	  .module('promises')
	  .controller('Controller', Controller);

	  Controller.$inject = ['$scope', 'service', '$timeout'];

	  function Controller($scope, service, $timeout) {

	  	var vm = this;

	  	vm.modifyList = modifyList;
	  	vm.add = add;
	  	vm.promiseAdd = promiseAdd;
	  	// vm.remove = remove;

	  	vm.groceryList = ['Popsicle', 'Hotdog', 'Breadslice', 'Toothpick', 'Rubberband', 'Yacht', 'Bun'];

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

	  	function checkForItem(item) {
	  			var itemToAdd;
	  			if (!vm.groceryList.indexOf(item)) {
	  				itemToAdd = item;
	  				console.log(itemToAdd);
	  			} else {
	  				console.log("Item already exists.", itemToAdd);
	  			}
	  			return itemToAdd;
	  	}

	  	function promiseAdd(item) {
	  		checkForItem(item).then(function(response) {
	  			console.log(response);
	  		})
	  	}



	  }

})();