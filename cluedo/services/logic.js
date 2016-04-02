(function() {
  var app = angular.module('app');

  app.factory('logic', 
    ['store', 
    function(store) {

    var logic = {

      hasFullHand: function(playerName, handCards) {
        var handCount = 0;
        // Add cards from deductions
        for (var i in store.data.deductions) {
          var deduction = store.data.deductions[i];
          if (deduction.player === playerName && deduction.hasCard) {
            handCount++;
            handCards.push(deduction.card);
          }
        }
        // Add cards from possibilities
        for (var i in store.data.possibilities) {
          var possibility = store.data.possibilities[i];
          if (possibility.player === playerName) {
            var unique = true;
            for (var j in possibility.cards) {
              var card = possibility.cards[j];
              if (handCards.indexOf(card) === -1) {
                handCards.push(card);
              }
              else {
                unique = false;
              }
            }
            if (unique) {
              handCount++;
            }
          }
        }
        var player = store.getPlayer(playerName);
        return handCount === player.numCards;
      },

      getAnswer: function(group) {
        for (var i in store.data.cards) {
          var card = store.data.cards[i];
          if (card.group === group && this.isAnswer(card.name)) {
            return card.name;
          }
        }
        return null;
      },

      possibilityExists: function(playerName, cardName) {
        for (var i in store.data.possibilities) {
          var possibility = store.data.possibilities[i];
          if (possibility.player === playerName &&
              possibility.cards.indexOf(cardName) !== -1) return true;
        }
        return false;
      },

      hasCard: function(playerName, cardName) {
        var deduction = store.getDeduction(playerName, cardName);
        if (deduction === null) return null;
        return deduction.hasCard;
      },

      isOwned: function(cardName) {
        for (var i in store.data.players) {
          var playerName = store.data.players[i].name;
          if (this.hasCard(playerName, cardName)) return true;
        }
        return false;
      },

      isAnswer: function(cardName) {
        for (var i in store.data.players) {
          var playerName = store.data.players[i].name;
          var hasCard = this.hasCard(playerName, cardName);
          if (hasCard !== false) return false;
        }
        return true;
      },

      addDeduction: function(playerName, cardName, hasCard) {

        // TODO: If deduction.hasCard === !hasCard turn is inconsistent
        if (store.getDeduction(playerName, cardName) !== null) return;

        store.data.deductions.push({
          player: playerName,
          card: cardName,
          hasCard: hasCard
        });

        this.updatePossibilities(playerName, cardName, hasCard);

        // If player has card, other players don't
        if (hasCard) {
          for (var i in store.data.players) {
            var player = store.data.players[i];
            if (player.name !== playerName) {
              this.addDeduction(player.name, cardName, false);
            }
          }
        }

        // Check if any more deductions can be made in the group
        var card = store.getCard(cardName);
        this.checkGroup(card.group);

        this.checkHand(playerName);

      },

      // Check if a players hand is full and rule out other cards if so
      checkHand: function(playerName) {
        if (playerName === store.data.players[0].name) return;
        var handCards = [];
        if (this.hasFullHand(playerName, handCards)) {
          for (var i in store.data.cards) {
            var card = store.data.cards[i];
            if (handCards.indexOf(card.name) === -1) {
              this.addDeduction(playerName, card.name, false);
            }
          }
        }
      },

      checkGroup: function(group) {
        var answer = this.getAnswer(group);
        
        if (answer === null) {

          // If only one not owned then it is the answer
          var notOwnedCount = 0;
          var notOwnedCard;
          for (var i in store.data.cards) {
            var card = store.data.cards[i];
            if (card.group === group && ! this.isOwned(card.name)) {
              notOwnedCount++;
              notOwnedCard = card.name;
            }
          }
          if (notOwnedCount === 1) {
            for (var i in store.data.players) {
              var playerName = store.data.players[i].name;
              this.addDeduction(playerName, notOwnedCard, false);
            }
          }

        }
        // If answer is known then other cards in group must be owned
        else {

          for (var i in store.data.cards) {
            var card = store.data.cards[i];

            if (card.group !== group ||
                card.name === answer ||
                this.isOwned(card.name)) continue;

            // If only one player without deduction then they must own
            var notKnownCount = 0;
            var notKnownPlayer;
            for (var j in store.data.players) {
              var player = store.data.players[j];
              if (this.hasCard(player.name, card.name) === null) {
                notKnownCount++;
                notKnownPlayer = player.name;
              }
            }
            if (notKnownCount === 1) {
              this.addDeduction(notKnownPlayer, card.name, true);
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

        for (var i in store.data.possibilities) {
          var possibility = store.data.possibilities[i];
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
        store.data.possibilities = store.data.possibilities
          .filter(function(item) {
            return !item.old;
        });

        store.data.possibilities.push({
          player: player,
          cards: cards
        });

        this.checkHand(player);

      },

      addTurn: function(player, guess, responses) {

        store.data.turns.push({
          player: player,
          guess: guess,
          responses: responses
        });

        // Loop through responses
        for (var resp in responses) {
          resp = responses[resp];

          // Responding player has a card
          if (resp.showedCard === "true") {
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

      updatePossibilities: function(player, card, hasCard) {
        for (var i in store.data.possibilities) {
          var possibility = store.data.possibilities[i];
          if (player !== possibility.player) continue;
          if (possibility.cards.indexOf(card) === -1) continue;
          store.data.possibilities.splice(i, 1);
          if (!hasCard) {
            var cards = possibility.cards;
            for (var j in cards) {
              if (cards[j] === card) {
                cards.splice(j, 1);
                break;
              }
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
