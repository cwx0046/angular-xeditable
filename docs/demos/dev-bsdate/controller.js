app.controller('DevBsdateCtrl', function($scope) {
	$scope.user = {
		dob: new Date(1984, 4, 15),
		startDate: '',
		hireDate: new Date(2006, 4, 15)
	};

	$scope.getMinDate = function() {
		return new Date(1984, 4, 01);
	};

	$scope.getMaxDate = function($event, elementOpened) {
		return new Date(2016, 4, 01);
	};

	$scope.getInitDate = function($event, elementOpened) {
		return new Date();
	};
	
	$scope.opened = {};

	$scope.open = function($event, elementOpened) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened[elementOpened] = !$scope.opened[elementOpened];
	};
	
	$scope.changed = function() {
		$scope.user.changed = true;	
		window.console.log("value changed");
	};
});