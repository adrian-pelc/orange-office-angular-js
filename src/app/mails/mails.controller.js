(function () {
  'use strict';

  angular
    .module('angularTraining')
    .controller('MailsController', MailsController);

  /** @ngInject */
  function MailsController($http) {
    var vm = this;
    var response = $http.get("assets/json/fake.mailList.json");
    response.then(function (result) {
      vm.mails = result.data;
    });
    vm.onSelect = function (mail) {
      if (vm.mails)
      for (var i in vm.mails.mails) {
        vm.mails.mails[i].selected = "";
      }
      mail.selected = "mail-item-selected";
    };
    vm.canChangePage = function (dir) {
      return vm.mails && vm.currentPage + dir >= 0
        && (vm.currentPage + dir) * vm.mailsPerPage < vm.mails.mails.length;
    };
    vm.onPage = function (dir) {
      var allow = vm.canChangePage(dir);
      if (allow)
        vm.currentPage += dir;
      return allow;
    };
    vm.currentPage = 0;
    vm.mailsPerPage = 5;

  }
})();
