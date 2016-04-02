(function(){
  var app = angular.module('app');

  app.controller('HomeController',
    ['$scope', '$location', 'store',
    function($scope, $location, store) {

    $scope.store = store;

    $scope.newGame = function() {
      $location.url('setup');
    };

    $scope.continue = function() {
      if (store.dataExists()) $location.url('overview');
    };

    $scope.reset = function() {
      if (window.confirm("Clear all data?"))
      {
        if (store.dataExists()) store.data.$reset();
      }
    };

  }]);
})();
