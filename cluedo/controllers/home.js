(function(){
  var app = angular.module('app');
  
  app.controller('HomeController', ['$scope', '$location', 'store', 'config', function($scope, $location, store, config) {
    
    $scope.canContinue = store.version === config.version;
    
    $scope.newGame = function() {
      $location.url('setup');
    };
    
    $scope.continue = function() {
      $location.url('overview')
    };
    
  }]);
})();