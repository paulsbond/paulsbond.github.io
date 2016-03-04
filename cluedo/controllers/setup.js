(function(){
  var app = angular.module('app');
  
  app.controller('SetupController',
    ['$scope', '$location', '$localStorage', 'data', 'logic',
    function($scope, $location, $localStorage, data, logic) {

    $scope.$store = $localStorage.$default({
        players: [{},{},{}],
    });

    $scope.cardSets = data.cardSets;
    $scope.cardSet = data.cardSets[0];

    $scope.addPerson = function() {
      $localStorage.players.push({});
    };

    $scope.removePerson = function(index) {
      $localStorage.players.splice(index, 1);
    };

    $scope.submit = function() {
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
