(function() {
  'use strict';

  angular
    .module('angularTraining')
    .filter('MailsPagination', MailsPagination);

  /** @ngInject */
  function MailsPagination() {
    return function(input, entriesPerPage, currentPage)
    {
      if (input === undefined) return input;
      return input.slice(currentPage * entriesPerPage, (currentPage + 1)* entriesPerPage);
    }

  }
})();
