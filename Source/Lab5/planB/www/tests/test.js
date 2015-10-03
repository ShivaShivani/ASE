describe('LoginCtrl',function() {
	var scope;
	
	beforeEach(angular.mock.module('login'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('LoginCtrl' , {$scope: scope});
	}));
	
	it("checks for valid login", function() {
		var 
	})
});