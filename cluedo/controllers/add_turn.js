(function(){
  var app = angular.module('app');

  app.controller('AddTurnController', 
    ['$scope', '$location', '$filter', '$localStorage', 'logic',
    function($scope, $location, $filter, $localStorage, logic) {

    $scope.$store = $localStorage;

    $scope.player = $localStorage.players[0].name;

    $scope.guess = [
      $filter('filter')($localStorage.cards,{group:"Suspect"})[0].name,
      $filter('filter')($localStorage.cards,{group:"Weapon"})[0].name,
      $filter('filter')($localStorage.cards,{group:"Location"})[0].name
    ];

    $scope.responses = [];
    for (var i in $localStorage.players) {
      $scope.responses.push({
        player: $localStorage.players[i].name,
        showedCard: "null",
        card: "null"
      });
    }

    $scope.validResponses = function() {
      var validResponses = [];
      for (var i in $scope.responses) {
        response = $scope.responses[i];
        if (response.player !== $scope.player &&
            response.showedCard !== "null") {
          validResponses.push(response);
        }
      }
      return validResponses;
    };

    $scope.submit = function() {

      $localStorage.previousState = {
        turns: angular.copy($localStorage.turns),
        deductions: angular.copy($localStorage.deductions),
        possibilities: angular.copy($localStorage.possibilities)
      };

      logic.addTurn($scope.player, $scope.guess, $scope.validResponses());
      $location.url('overview');
    };

  }]);
})();
