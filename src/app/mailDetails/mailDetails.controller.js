(function() {
  'use strict';

  angular
    .module('angularTraining')
    .controller('MailDetailsController', MailDetailsController);

  /** @ngInject */
  function MailDetailsController($scope, $http, $stateParams) {
    var response = $http.get("assets/json/fake.mailList.json");
    response.then(function(result)
    {
      for (var index in result.data.mails)
      {
        var mail = result.data.mails[index];
        if (mail.id === $stateParams.id)
        {
          $scope.mailDetails.mail = mail;
          return;
        }
      }
      console.log("Not found: " + $stateParams.id);
    });
  }
})();
