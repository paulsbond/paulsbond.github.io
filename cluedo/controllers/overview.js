(function(){
  var app = angular.module('app');
  
  app.controller('OverviewController', ['$scope', 'store', 'logic', function($scope, store, logic) {
    $scope.players = store.players;
    $scope.cards = store.cards;
    $scope.logic = logic;
  }]);
})();