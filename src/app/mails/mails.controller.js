(function() {
  'use strict';

  angular
    .module('angularTraining')
    .controller('MailsController', MailsController);

  /** @ngInject */
  function MailsController($scope, $http) {
    var response = $http.get("assets/json/fake.mailList.json");
    response.then(function(result)
    {
      $scope.mails.mails = result.data;
    });
  }
})();
