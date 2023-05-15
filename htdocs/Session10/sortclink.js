(function () {
	var app = angular.module('myApp', []);

	app.controller('filterContronller', filterContronller);

	filterContronller.$inject = ['$scope'];

	function filterContronller($scope) {
		var employees = [
			{name: 'Hai', birthday: new Date ('03/23/2003'), salary: 120000000, gender: 'Male', status: true},
			{name: 'Vu', birthday: new Date ('03/23/2003'), salary: 150000000, gender: 'Male', status: false},
			{name: 'Chi', birthday: new Date ('03/15/2003'), salary: 120000000, gender: 'FeMale', status: true},
			{name: 'Quang', birthday: new Date ('06/23/2003'), salary: 60000000, gender: 'Male', status: false},
			{name: 'Vy', birthday: new Date ('05/15/2003'), salary: 100000000, gender: 'FeMale', status: true},
			{name: 'Phuong', birthday: new Date ('03/13/2002'), salary: 120000000, gender: 'FeMale', status: false}
		];

		$scope.employees = employees;
		$scope.sortColumn = 'name';
		$scope.reverseSort = false;

		$scope.sortData = function (column) {
			if ($scope.sortColumn == column) {
				$scope.reverseSort = !$scope.reverseSort;

			}
			else {
				$scope.reverseSort = false;
				$scope.sortColumn = column;
			}
		}

		$scope.getSortClass = function (column){
			if ($scope.sortColumn == column) {
				return $scope.reverseSort ? 'arrow-up' : 'arrow-down';
			}
			return '';
		}
	}

	app.filter('status', function () {
		return function (input) {
			if (input == true) {
				return'Kích hoạt';
			}
			else 
			return 'Khoá';
		}
	});

})()