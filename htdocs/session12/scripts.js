var app = angular.module('handleEvent', []);

app.controller('handleEventCtrl', ['$scope', function ($scope) {
	var techLanguage = [
		  {Name: "C#", Like: 0, Dislike: 0, Minus: 0},
		  {Name: "C", Like: 0, Dislike: 0, Minus: 0},
		  {Name: "Python", Like: 0, Dislike: 0, Minus: 0},
		  {Name: "Java", Like: 0, Dislike: 0, Minus: 0}
		]

	$scope.techLanguage = techLanguage;

	$scope.IncreaseLike = function(tech) {
		tech.Like++;
		tech.Minus = tech.Like - tech.Dislike;
	}

	$scope.IncreaseDisLike = function(tech) {
		tech.Dislike++;
		tech.Minus = tech.Like - tech.Dislike;
	}
}]);