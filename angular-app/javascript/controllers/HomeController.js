app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $scope.message = "Connected!";
  $http.get('http://localhost:8080/api/gOverflow/').then(function(response) { // INDEX
    $scope.questions = response.data;
    console.log($scope.questions)
  }, function(response) {
    console.log("Invalid URL");
  });

}]);
