(function(){
  var app = angular.module('app');
  
  app.controller('SetupController',
    ['$scope', '$location', '$localStorage', 'data', 'logic',
    function($scope, $location, $localStorage, data, logic) {

    $scope.$store = $localStorage;
    
    $scope.players = [];
    $scope.cardSet = data.cardSets[0];
    $scope.numPlayers = 6;
    $scope.cardSets = data.cardSets;

    $scope.countCards = function() {
      $scope.totalCards = 0;
      for (var i in $scope.players) {
        var player = $scope.players[i];
        player.numCards = Math.floor(18 / $scope.numPlayers);
        if (player.hasExtraCard) player.numCards++;
        $scope.totalCards += player.numCards;
      }
    }

    $scope.$watch('numPlayers', function(val) {
      // Resize players array
      if (val < $scope.players.length) {
        $scope.players = $scope.players.slice(0, val);
      } else {
        while (val !== $scope.players.length) {
          $scope.players.push({});
        }
      }
      // Reset info on extra cards
      for (var i in $scope.players) {
        $scope.players[i].hasExtraCard = false;
      }
      // Recount each players cards
      $scope.countCards();
    });

    $scope.validCardTotal = function() {
      return $scope.totalCards === 18;
    };

    $scope.validHandCount = function() {
      $scope.handCount = 0;
      for (var i in $scope.cardSet.cards) {
        if ($scope.cardSet.cards[i].inHand) $scope.handCount++;
      }
      return $scope.players[0].numCards === $scope.handCount;
    };

    $scope.validHandCards = function() {
      var freeSuspects = 0;
      var freeWeapons = 0;
      for (var i in $scope.cardSet.cards) {
        var card = $scope.cardSet.cards[i];
        if (! card.inHand) {
          if (card.group === "Suspect") freeSuspects++;
          if (card.group === "Weapon") freeWeapons++;
          if (freeSuspects > 0 && freeWeapons > 0) return true;
        }
      }
      return false;
    };

    $scope.customValid = function() {
      return $scope.validCardTotal() && 
             $scope.validHandCount() &&
             $scope.validHandCards();
    };

    $scope.submit = function() {
      $localStorage.$reset();
      $localStorage.players = $scope.players;
      $localStorage.cards = $scope.cardSet.cards;
      $localStorage.turns = [];
      $localStorage.deductions = [];
      $localStorage.possibilities = [];
      
      for (var i in $localStorage.cards) {
        var card = $localStorage.cards[i];
        logic.addDeduction($localStorage.players[0].name,
                           card.name, card.inHand);
      }
      
      $location.url('overview');
    };
    
  }]);
})();
