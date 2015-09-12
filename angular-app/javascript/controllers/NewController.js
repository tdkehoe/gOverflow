app.controller('NewController', ['$scope', '$http', '$location', '$route', function($scope, $http, $location, $route) {
  console.log("New controller.")

  $scope.addQuestion = function(questions) {
    console.log("In newQuestion.")
    console.log($scope.questions);
    var question = {
      questionTitle: $scope.questions.title,
      questionBody: $scope.questions.body,
      questionAuthor: $scope.questions.author,
      questionProject: $scope.questions.project,
      questionFrustration: $scope.questions.frustration,
      likes: 0
    }
    console.log(question);
    $http.post('http://localhost:8080/api/gOverflow/', question).then(function(response) {
      console.log("Question added.");
      console.log($scope.questions);
      $location.path('/');
    }, function(response) {
      console.log("Invalid URL.");
    })
  }

}]);
