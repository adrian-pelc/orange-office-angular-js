(function() {
  'use strict';

  angular
    .module('angularTraining')
    .controller('ContactDetailsController', ContactDetailsController);

  /** @ngInject */
  function ContactDetailsController($scope, $http, $stateParams) {
    var response = $http.get("assets/json/fake.contactList.json");
    response.then(function(result)
    {
      for (var index in result.data.contacts)
      {
        var contact = result.data.contacts[index];
        if (contact.id === $stateParams.id)
        {
          $scope.contactDetails.contact = contact;
          return;
        }
      }
      console.log("Not found: " + $stateParams.id);
    });
  }
})();
