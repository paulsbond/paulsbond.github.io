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

    $scope.$watch('numPlayers', function(val) {
      if (val < $scope.players.length) {
        $scope.players = $scope.players.slice(0, val);
      } else {
        while (val !== $scope.players.length) {
          $scope.players.push({});
        }
      }
    });

    $scope.submit = function() {
      $localStorage.$reset();
      $localStorage.players = $scope.players;
      $localStorage.cards = $scope.cardSet.cards;
      $localStorage.turns = [];
      $localStorage.deductions = [];
      $localStorage.possibilities = [];
      
      for (var i in $localStorage.cards) {
        var card = $localStorage.cards[i];
        var inHand = card.inHand === true;
        logic.addDeduction($localStorage.players[0].name, card.name, inHand);
      }
      
      $location.url('overview');
    };
    
  }]);
})();
