(function() {
  var app = angular.module('app');
  
  app.factory('logic', 
    ['$localStorage', 
    function($localStorage) {
    
    var logic = {
      
      addDeduction: function(player, card, hasCard) {
        
        // Check if a deduction already exists
        if (this.hasCard(player, card) !== null) return;

        $localStorage.deductions.push({
          player: player,
          card: card,
          hasCard: hasCard
        });
        
        this.updatePossibilities(player, card, hasCard);
        
        // If player has card, other players don't
        if (hasCard) {
          for (var i in $localStorage.players) {
            var other = $localStorage.players[i].name;
            if (other !== player) {
              this.addDeduction(other, card, false);
            }
          }
        }
      },
      
      addPossibility: function(player, guess) {
        
        // Get possible cards accounting for deductions
        var cards = [];
        for (var i in guess) {
          var hasCard = this.hasCard(player, guess[i]);
          if (hasCard === true) return;
          if (hasCard === null) cards.push(guess[i]);
        }
        
        // TODO: If 0 cards are left then turn is inconsistent
        
        // Change to a deduction if only one option is left
        if (cards.length === 1) {
          this.addDeduction(player, cards[0], true);
          return;
        }
        
        for (var i in $localStorage.possibilities) {
          var possibility = $localStorage.possibilities[i];
          if (player !== possibility.player) continue;
          
          // Check if possibility is covered
          var covered = true;
          for (var j in possibility.cards) {
            var card = possibility.cards[j];
            if (cards.indexOf(card) === -1) covered = false;
          }
          if (covered) return;
          
          // Mark old possibilities that should be removed
          var old = true;
          for (var j in cards) {
            var card = cards[j];
            if (possibility.cards.indexOf(card) === -1) old = false;
          }
          if (old) possibility.old = true;
        }
        
        // Remove old possibilities
        $localStorage.possibilities = $localStorage.possibilities
          .filter(function(item) {
            return !item.old;
        });
        
        $localStorage.possibilities.push({
          player: player,
          cards: cards
        });
        
      },
      
      addTurn: function(player, guess, responses) {
        
        $localStorage.turns.push({
          player: player,
          guess: guess,
          responses: responses
        });
        
        // Loop through responses
        for (var resp in responses) {
          resp = responses[resp];
          
          // Responding player has a card
          if (resp.showedCard === 'true') {
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
        for (var i in $localStorage.deductions) {
          var deduction = $localStorage.deductions[i];
          if (deduction.player === player && deduction.card === card) {
            return deduction.hasCard;
          }
        }
        return null;
      },
      
      updatePossibilities: function(player, card, hasCard) {
        for (var i in $localStorage.possibilities) {
          var possibility = $localStorage.possibilities[i];
          if (player !== possibility.player) continue;
          if (possibility.cards.indexOf(card) === -1) continue;
          $localStorage.possibilities.splice(i, 1);
          if (!hasCard) {
            var cards = possibility.cards;
            for (var j in cards) {
              if (cards[j] === card) cards.splice(j, 1);
              break;
            }
            if (cards.length == 1) this.addDeduction(player, cards[0], true);
            if (cards.length == 2) this.addPossibility(player, cards);
          }
        }
      }
      
    };
    
    return logic;
  }]);
})();
