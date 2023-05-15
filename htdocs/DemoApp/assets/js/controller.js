 var app = angular.module('myApp',[]);

 app.controller('ShowElementCtrl',['$scope', function ($scope) {
    $scope.value = "Change value here";
     $scope._showElement = true;
     $scope.changeValue = function () {
         $scope._showElement = false;
     }
 }]);
 

