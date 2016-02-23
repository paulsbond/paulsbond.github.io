(function(){
  var app = angular.module('app');
  
  app.controller('OverviewController', 
  ['$scope', '$localStorage', 'logic',
  function($scope, $localStorage, logic) {
    
    $scope.$store = $localStorage;
    $scope.logic = logic;
    
  }]);
})();
