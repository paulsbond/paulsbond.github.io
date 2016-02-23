(function(){
  var app = angular.module('app');
  
  app.controller('HomeController',
    ['$scope', '$location', '$localStorage', 'config',
    function($scope, $location, $localStorage, config) {
    
    $scope.$store = $localStorage;
    
    $scope.canContinue = $localStorage.version === config.version;
    
    $scope.newGame = function() {
      $location.url('setup');
    };
    
    $scope.continue = function() {
      $location.url('overview')
    };
    
  }]);
})();
