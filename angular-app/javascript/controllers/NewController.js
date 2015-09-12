app.controller('NewController', ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route) {
  console.log("New controller.")

  $scope.addQuestion = function(question) {
    console.log("In newQuestion.")
    console.log($scope.question);
    var question = {
      questionTitle: $scope.question.title,
      questionBody: $scope.question.body,
      questionAuthor: $scope.question.author,
      likes: 0
    }
    console.log(question);
    $http.post('http://localhost:8080/api/gOverflow/', question).then(function(response) {
      console.log("Question added.");
      $location.path('/');
    }, function(response) {
      console.log("Invalid URL.");
    })
  }

}]);
