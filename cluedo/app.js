(function(){
  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
      })
      .when('/addturn', {
        controller: 'AddTurnController',
        templateUrl: 'partials/addturn.html'
      })
      .when('/overview', {
        controller: 'OverviewController',
        templateUrl: 'partials/overview.html'
      })
      .when('/setup', {
        controller: 'SetupController',
        templateUrl: 'partials/setup.html'
      })
      .when('/turns', {
        controller: 'TurnsController',
        templateUrl: 'partials/turns.html'
      })
      .otherwise({redirectTo:'/'});

  }]);
})();