// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.items = [];

 $http.get("https://www.ipersoft.it/desio/storicoattijson")
    .then(function(response) {
        $scope.items = response.data;
    });
	
$scope.Ricerca=function () {
		console.log("prova");
		alert("Esecuzione");
 	alert('https://www.ipersoft.it/desio/storicoattijson?oggetto=' + $scope.CasellaRicerca);
$http.get("https://www.ipersoft.it/desio/storicoattijson?oggetto=" + $scope.CasellaRicerca)
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
