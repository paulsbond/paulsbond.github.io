(function(){
  var app = angular.module('app', ['ngRoute', 'ngStorage']);

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      })
      .when('/addturn', {
        controller: 'AddTurnController',
        templateUrl: 'views/addturn.html'
      })
      .when('/overview', {
        controller: 'OverviewController',
        templateUrl: 'views/overview.html'
      })
      .when('/setup', {
        controller: 'SetupController',
        templateUrl: 'views/setup.html'
      })
      .when('/turns', {
        controller: 'TurnsController',
        templateUrl: 'views/turns.html'
      })
      .otherwise({redirectTo:'/'});

  }]);
})();
