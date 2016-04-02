(function() {
  var app = angular.module('app');

  app.factory('store', 
    ['$localStorage', 
    function($localStorage) {

    var store = {};

    store.data = $localStorage;

    store.setupNewGame = function(players, cards) {
      store.data.$reset();
      store.data.players = players;
      store.data.cards = cards;
      store.data.turns = [];
      store.data.deductions = [];
      store.data.possibilities = [];
    };

    store.getPlayer = function(name) {
      for (var i in store.data.players) {
        var player = store.data.players[i];
        if (player.name === name) {
          return player;
        }
      }
      return null;
    };

    store.getCard = function(name) {
      for (var i in store.data.cards) {
        var card = store.data.cards[i];
        if (card.name === name) {
          return card;
        }
      }
      return null;
    };

    store.getDeduction = function(playerName, cardName) {
      for (var i in store.data.deductions) {
        var deduction = store.data.deductions[i];
        if (deduction.player === playerName && deduction.card === cardName) {
          return deduction;
        }
      }
      return null;
    };

    store.dataExists = function() {
      return store.data.players !== undefined;
    };

    return store;
  }]);
})();
