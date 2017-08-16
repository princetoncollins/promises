(function() {
	'use strict';

	angular
	  .module('promises')
	  .service('service', service);

	  service.$inject = ['$http', '$q'];

	  function service($http, $q) {

	  	var vm = this;

	  	var service = {};

	  	return service;

	  }

})();