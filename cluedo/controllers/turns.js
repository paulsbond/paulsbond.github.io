(function(){
  var app = angular.module('app');
  
  app.controller('TurnsController',
    ['$scope', '$location', '$localStorage',
    function($scope, $location, $localStorage) {

    $scope.$store = $localStorage;

    $scope.summary = function(response) {
      var summary = response.player;
      if (response.hasCard === "true") {
        if (response.card === "null") {
          summary += " showed an unknown card";
        } else {
          summary += " showed " + response.card;
        }
      } else if (response.hasCard === "false") {
        summary += " could not show a card";
      } else {
        summary += " did not respond";
      }
      return summary;
    };
    
  }]);
})();
