(function(){
    'use strict';

    angular.module('ngMap').provider('ngMapConfig', function ngMapConfigProvider() {

  // Default values
  var useAdvancedMarkerElements = false;

  return {
    get useAdvancedMarkerElements() {
      return useAdvancedMarkerElements;
    },
    set useAdvancedMarkerElements(value) {
        useAdvancedMarkerElements = !!value;
    },

    $get: function () {
      return {
        useAdvancedMarkerElements: useAdvancedMarkerElements
      };
    }
  };
})

})();
