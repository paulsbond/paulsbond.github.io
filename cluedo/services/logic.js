(function() {
  var app = angular.module('app');
  
  app.factory('logic', ['store', function(store) {
    
    var logic = {
      
      addDeduction: function(player, card, hasCard) {
        
        // Check if a deduction already exists
        if (this.hasCard(player, card) !== null) return;

        store.add('deductions', {
          player: player,
          card: card,
          hasCard: hasCard
        });
        
        this.updatePossibilities(player, card, hasCard);
        
        // If player has card, other players don't
        if (hasCard) {
          for (var i in store.players) {
            var other = store.players[i].name;
            if (other !== player) {
              this.addDeduction(other, card, false);
            }
          }
        }
      },
      
      addPossibility: function(player, guess) {
        
        // Account for relevant deductions
        for (var i in guess) {
          var hasCard = this.hasCard(player, guess[i]);
          if (hasCard === true) return;
          if (hasCard === false) guess.splice(i, 1);
        }
        
        // Change to a deduction if only one option is left
        if (guess.length === 1) {
          this.addDeduction(player, guess[0], true);
          return;
        }
        
        // Check if possibility is covered
        for (var i in store.possibilities) {
          var possibility = store.possibilities[i];
          if (player !== possibility.player) continue;
          var covered = true;
          for (var j in possibility.guess) {
            var card = possibility.guess[j];
            if (guess.indexOf(card) === -1) covered = false;
          }
          if (covered) return;
        }
        
        store.add('possibilities', {
          player: player,
          guess: guess
        });
        
      },
            
      addTurn: function(player, guess, responses) {
        
        store.add('turns', {
          player: player,
          guess: guess,
          responses: responses
        });
        
        // Loop through responses
        for (var resp in responses) {
          resp = responses[resp];
          
          // Responding player has a card
          if (resp.hasCard === 'true') {
            if (resp.card === 'null') {
              this.addPossibility(resp.player, guess);
            }
            else {
              this.addDeduction(resp.player, resp.card, true);
            }
          }
          // Responding player does not have a card
          else {
            for (var card in guess) {
              this.addDeduction(resp.player, guess[card], false);
            }
          }
        }
      },
      
      hasCard: function(player, card) {
        for (var i in store.deductions) {
          var deduction = store.deductions[i];
          if (deduction.player === player && deduction.card === card) {
            return deduction.hasCard;
          }
        }
        return null;
      },
      
      updatePossibilities: function(player, card, hasCard) {
        for (var i in store.possibilities) {
          var possibility = store.possibilities[i];
          if (player !== possibility.player) continue;
          if (possibility.guess.indexOf(card) === -1) continue;
          store.remove('possibilities', i);
          if (!hasCard) {
            var newList = possibility.guess;
            for (var j in newList) {
              if (newList[j] === card) newList.splice(j, 1);
            }
            if (newList.length == 1) this.addDeduction(player, newList[0], true);
            if (newList.length == 2) this.addPossibility(player, newList);
          }
        }
      }
      
    };
    
    return logic;
  }]);
})();