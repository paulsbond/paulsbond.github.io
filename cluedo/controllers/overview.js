(function(){
  var app = angular.module('app');
  
  app.controller('OverviewController', 
  ['$scope', '$localStorage', 'logic',
  function($scope, $localStorage, logic) {
    
    $scope.$store = $localStorage;
    $scope.logic = logic;
    
    $scope.icon = function(player, card) {
      var hasCard = logic.hasCard(player.name, card.name);
      if (hasCard === true) return "fa fa-check";
      if (hasCard === false) return "fa fa-times";
      return "";
    };
    
  }]);
})();
