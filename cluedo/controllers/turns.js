(function(){
  var app = angular.module('app');
  
  app.controller('TurnsController',
    ['$scope', '$location', 'store',
    function($scope, $location, store) {

    $scope.store = store;

    $scope.summary = function(response) {
      var summary = response.player;
      if (response.showedCard === "true") {
        if (response.card === "null") {
          summary += " showed an unknown card";
        } else {
          summary += " showed " + response.card;
        }
      } else if (response.showedCard === "false") {
        summary += " couldn't show a card";
      } else {
        summary += " did not respond";
      }
      return summary;
    };
    
    $scope.undoTurn = function() {
      if (store.data.previousState !== undefined &&
          window.confirm("Undo last turn?")) {
        store.data.turns = store.data.previousState.turns;
        store.data.deductions = store.data.previousState.deductions;
        store.data.possibilities = store.data.previousState.possibilities;
        delete store.data.previousState;
      }
    };
    
  }]);
})();
