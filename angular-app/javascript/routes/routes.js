app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/new', {
    templateUrl: 'javascript/templates/new.html',
    controller: 'NewController'
  })
  .when('/:id/edit', {
    templateUrl: 'javascript/templates/edit.html',
    controller: 'EditController'
  })
  .when('/:id', {
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
})
