(function(){
  var app = angular.module('app');

  app.controller('AddTurnController', 
    ['$scope', '$location', '$filter', 'store', 'logic',
    function($scope, $location, $filter, store, logic) {

    $scope.store = store;

    $scope.player = store.data.players[0].name;

    $scope.guess = [
      $filter('filter')(store.data.cards,{group:"Suspect"})[0].name,
      $filter('filter')(store.data.cards,{group:"Weapon"})[0].name,
      $filter('filter')(store.data.cards,{group:"Location"})[0].name
    ];

    $scope.responses = [];
    for (var i in store.data.players) {
      $scope.responses.push({
        player: store.data.players[i].name,
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

      store.data.previousState = {
        turns: angular.copy(store.data.turns),
        deductions: angular.copy(store.data.deductions),
        possibilities: angular.copy(store.data.possibilities)
      };

      logic.addTurn($scope.player, $scope.guess, $scope.validResponses());
      $location.url('overview');
    };

  }]);
})();
