(function() {
  var app = angular.module('app');
  
  app.factory('store', function() {
    
    var prefix = 'cluedols-';
    
    var store = {
      
      _saveToLocalStorage: function(suffix) {
        var key = prefix + suffix;
        localStorage.setItem(key, angular.toJson(store[suffix]));
      },
      
      put: function(suffix, value) {
        store[suffix] = value;
        store._saveToLocalStorage(suffix);
      },
      
      add: function(suffix, value) {
        store[suffix].push(value);
        store._saveToLocalStorage(suffix);
      },
      
      remove: function(suffix, index) {
        store[suffix].splice(index);
        store._saveToLocalStorage(suffix);
      },
      
      clear: function() {
        for (var key in localStorage) {
          if (key.substring(0, prefix.length) === prefix) {
            var suffix = key.substring(prefix.length);
            localStorage.removeItem(key);
            delete store[suffix];
          }
        }
      }
      
    };
    
    // Load all existing keys from localStorage
    for (var key in localStorage) {
      if (key.substring(0, prefix.length) === prefix) {
        var suffix = key.substring(prefix.length);
        store[suffix] = JSON.parse(localStorage.getItem(key));
      }
    }
    
    return store;
  });
})();