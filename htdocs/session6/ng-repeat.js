var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope) {
	var countries = [
		{
			name: "USA",
			cities: [
				{name: "Los Angeles"},
				{name: "New York"},
				{name: "Chicago"}
			]
		},
		{
			name: "VietNam",
			cities: [
				{name: "Ha Noi"},
				{name: "Sai Gon"},
				{name: "Buon Me Thuot"}
			]
		},
		{
			name: "India",
			cities: [
				{name: "Hyperebad"},
				{name: "Chennai"},
				{name: "Munbai"}
			]
		}
	];

	$scope.countries = countries;
}]);