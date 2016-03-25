(function(){
  var app = angular.module('app');

  app.controller('HomeController',
    ['$scope', '$location', '$localStorage', 'utils',
    function($scope, $location, $localStorage, utils) {

    $scope.dataExists = utils.dataExists;

    $scope.newGame = function() {
      $location.url('setup');
    };

    $scope.continue = function() {
      if (utils.dataExists()) $location.url('overview');
    };

    $scope.reset = function() {
      if (window.confirm("Clear all data?"))
      {
        if (utils.dataExists()) $localStorage.$reset();
      }
    };

  }]);
})();
