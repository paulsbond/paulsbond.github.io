(function(){
  var app = angular.module('app');
  
  app.controller('TurnsController',
    ['$scope', '$location', '$localStorage',
    function($scope, $location, $localStorage) {

    $scope.$store = $localStorage;

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
      if ($localStorage.previousState !== undefined &&
          window.confirm("Undo last turn?")) {
        $localStorage.turns = $localStorage.previousState.turns;
        $localStorage.deductions = $localStorage.previousState.deductions;
        $localStorage.possibilities = $localStorage.previousState.possibilities;
        delete $localStorage.previousState;
      }
    };
    
  }]);
})();
