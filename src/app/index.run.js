(function() {
  'use strict';

  angular
    .module('angularTraining')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
