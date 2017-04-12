// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.items = [];

 $http.get("https://www.ipersoft.it/desio/storicoattidettjson")
    .then(function(response) {
        $scope.items = response.data;
    });
	
$scope.Ricerca=function () {

url="https://www.ipersoft.it/desio/storicoattidettjson?oggetto=" + $scope.CasellaRicerca
console.log(url);
$http.get(url)
    .then(function(response) {
        $scope.items = response.data;
    });
}
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
