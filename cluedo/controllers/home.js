(function(){
  var app = angular.module('app');

  app.controller('HomeController',
    ['$scope', '$location', '$localStorage',
    function($scope, $location, $localStorage) {

    $scope.canContinue = function() {
      return $localStorage.players !== undefined;
    }

    $scope.newGame = function() {
      $location.url('setup');
    };

    $scope.continue = function() {
      if ($scope.canContinue()) $location.url('overview');
    };
    
    $scope.reset = function() {
      if ($scope.canContinue()) $localStorage.$reset();
    };

  }]);
})();
