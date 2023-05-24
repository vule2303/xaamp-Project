 var app = angular.module('myApp',[]);

 app.controller('getDataCtrl', function ($scope, $http) {
    //   $http.get("/demoPHPAPP/php/customers.php").then(function getDataPHP(response){
    //   $scope.myCustomer = response.data.records;
    // });
   $scope.sortColumn = 'name';

   $http({

      method: 'GET',
      url: "http://localhost/Angular_MVC/index.php/Welcome/getDataModel",

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

   //METHOD DELETE
    $scope.deleteUser = function (user) {
         $http({
            method : 'DELETE',
            url : 'http://localhost/Angular_MVC/index.php/Welcome/deleteCustomer/' + user.Id
         }).then(function successCallBack(response) {
            // body...
            alert('Delete Customer Success');
            // var index = $scope.users.indexOf(user);
            // $scope.users.splice(index,1);
         }, function errorCallBack(response) {
            // body...
            alert('Error! Cannot delete Customer');
         }
         )
      }

      //EditUSER
      $scope.showbutton = true;
      $scope.EditUser = function (row_data) {
         // body...
         console.log(row_data);
         $scope.dl_edit = row_data;
         $scope.showbutton = !$scope.showbutton;

      };

      //UPDATE
      $scope.updateUser = function () {
         // body...
         var dulieu = $.param({
            id : $scope.dl_edit.Id,
            name: $scope.dl_edit.Name,
            email: $scope.dl_edit.Email,
            birthday: $scope.dl_edit.BirthDay
         });

         console.log(dulieu);

         // var url = 'http://localhost/Angular_MVC_Rewrite/index.php/Welcome/updateById/' + $scope.dl_edit.Id;

         // var config = {
         //    headers: {
         //       'content-type' : 'application/x-www-form-urlencoded;charset=UTF-8'
         //    }
         // };

         // $http.post(url, dulieu, config).then(function Succeess(res) {
         //    // body...
         //    console.log(res.data);

         // },(res) => {
         //    alert("Error");
         // });
      }


      //METHOD CREATE
      $scope.createUser = () => {
         //nhan thong tin tu front-end ve
         var data = $.param({
            name: $scope.name,
            email: $scope.email
         });

         console.log(data);
        
         var url = 'http://localhost/Angular_MVC_Rewrite/index.php/Welcome/Create/';
         var config = {
            headers: {
               'content-type' : 'application/x-www-form-urlencoded;charset=UTF-8'
            }
         };

         $http.post(url, data, config).then(function Succeess(res) {
            // body...
            console.log(response.data);
         },(res) => {
            alert("Error");
         });
      };
 
});



   //CREATE
   
   

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

//  myApp.controller("removeController", function ($scope) 
//    { $scope.removeEl = function () 
//       { 
//          var el = angular.element( document.querySelector('.p')); 
//          el.remove(); 

// };
//  // kết nối sql
 // http://localhost/phpmyadmin/
 // sửa dữ liệu tại chỗ
 