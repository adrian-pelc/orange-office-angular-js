(function () {
  'use strict';

  angular
    .module('angularTraining')
    .controller('ContactsController', ContactsController);

  /** @ngInject */
  function ContactsController($scope, $http) {

    var response = $http.get("assets/json/fake.contactList.json");
    response.then(function (result) {
      $scope.contacts.contacts = result.data;
    });
  }
})();
