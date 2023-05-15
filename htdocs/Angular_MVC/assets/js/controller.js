 var app = angular.module('myApp',[]);

 app.controller('getDataCtrl', function ($scope, $http) {
    //   $http.get("/demoPHPAPP/php/customers.php").then(function getDataPHP(response){
    //   $scope.myCustomer = response.data.records;
    // });
      $scope.sortColumn = 'name';

   $http({

      method: 'GET',
      url: "http://localhost/Angular_MVC_Rewrite/index.php/Welcome/GetAllCustomerModel",

   }).then(function success (response) {
      $scope.listUser = response.data;
      $scope.sortColumn = 1;
      $scope.reverseSort = false;

      $scope.sortData = function (column) {
         if ($scope.sortColumn == column) {
            $scope.reverseSort = !$scope.reverseSort;
         }
         else {
            $scope.reverseSort = true;
            $scope.sortColumn = column;
         }
      }

      $scope.getSortClass = function (column) {
         if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-up' : 'arrow-down';
         }
         return '';
      }
      console.log(response.data[3]);

   }
   , function error (response) {
    alert("Error!!! Cannot connect to sever")
 });
});
 

 app.controller('updateCtrl', ['$scope', function ($scope) {
   $scope.updateData = false;
   $scope.changeData = function() {
      $scope.updateData = true;
   }
}]);

 app.controller('ShowElementCtrl',['$scope', function ($scope) {
  $scope.EventRunning = false; 
  $scope.StartEvent = function (event) 
  { 
      event.preventDefault(); 
     $scope.EventRunning = true; 
} 
  $scope.StopEvent = function (event) 
  { 
   event.preventDefault(); 
  $scope.EventRunning = false;
}

}]);
 // kết nối sql
 // http://localhost/phpmyadmin/
 // sửa dữ liệu tại chỗ
 //