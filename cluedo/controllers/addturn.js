(function(){
  var app = angular.module('app');
  
  app.controller('AddTurnController', ['$scope', '$location', '$filter', 'store', 'logic', function($scope, $location, $filter, store, logic) {
    
    $scope.players = store.players;
    
    $scope.suspects = [];
    $scope.weapons = [];
    $scope.locations = [];
    for (var card in store.cards) {
      card = store.cards[card];
      if (card.group === "Suspect") $scope.suspects.push(card);
      else if (card.group === "Weapon") $scope.weapons.push(card);
      else if (card.group === "Location") $scope.locations.push(card);
    }
    
    $scope.player = $scope.players[0].name;
    
    $scope.guess = [
      $scope.suspects[0].name,
      $scope.weapons[0].name,
      $scope.locations[0].name
    ];
    
    $scope.responses = [];
    for (var i in $scope.players) {
      $scope.responses.push({
        player: $scope.players[i].name ,
        hasCard: "null",
        card: "null"
      });
    }
    
    $scope.submit = function() {
      
      // Only process other players who responded
      var validResponses = [];
      for (var response in $scope.responses) {
        response = $scope.responses[response];
        if (response.player !== $scope.player && response.hasCard !== "null") {
          validResponses.push(response)
        }
      }
      
      logic.addTurn($scope.player, $scope.guess, validResponses);
      $location.url('overview');
    };
    
  }]);
})();