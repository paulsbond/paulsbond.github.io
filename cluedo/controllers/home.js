(function(){
  var app = angular.module('app');

  app.controller('HomeController',
    ['$scope', '$location',
    function($scope, $location) {

    $scope.newGame = function() {
      $location.url('setup');
    };

    $scope.continue = function() {
      $location.url('overview');
    };

  }]);
})();
