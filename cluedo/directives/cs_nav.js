(function(){
  var app = angular.module('app');

  app.directive('csNav',
    ['$location', 'store',
    function($location, store) {

    return {
      restrict: 'E',
      templateUrl: 'directives/cs_nav.html',
      scope: true,
      link: function(scope, elem, attrs) {
        scope.dataExists = store.dataExists;
      }
    };

  }]);
})();
