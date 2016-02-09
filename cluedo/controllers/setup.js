(function(){
  var app = angular.module('app');
  
  app.controller('SetupController',
    ['$scope', '$location', 'store', 'data', 'logic', 'config',
    function($scope, $location, store, data, logic, config) {
    
    $scope.players = store.players || [{},{},{}];
    $scope.cardSets = data.cardSets;
    $scope.cardSet = data.cardSets[0];
    $scope.hand = [{},{},{}];

    // Fix for bootstrap buttons retaining focus after click
    $scope.blur = function($event) {
      $event.currentTarget.blur();
    };

    $scope.addPerson = function() {
      $scope.players.push({});
    };

    $scope.removePerson = function(index) {
      $scope.players.splice(index, 1);
    };

    $scope.submit = function() {
      store.clear();
      
      store.put('version', config.version);
      store.put('players', $scope.players);
      store.put('cards', $scope.cardSet.cards);
      store.put('turns', []);
      store.put('deductions', []);
      store.put('possibilities', []);
      
      for (var i in $scope.cardSet.cards) {
        var card = $scope.cardSet.cards[i];
        var inHand = card.inHand === true;
        logic.addDeduction(store.players[0].name, card.name, inHand);
      }
      
      $location.url('overview');
    };
    
  }]);
})();