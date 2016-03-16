(function() {
  var app = angular.module('app');
  
  app.factory('utils', 
    ['$localStorage', 
    function($localStorage) {
    
    var utils = {
      
      dataExists: function() {
        return $localStorage.players !== undefined;
      }
      
    };
    
    return utils;
  }]);
})();
