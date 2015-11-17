angular
  .module('angularTraining')
  .config(function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('mails', {
          url: 'mails',
          parent: 'home',
          views: {
            'mainList': {
              templateUrl: 'app/mails/mails.html',
              controller: 'MailsController',
              controllerAs: 'mails'
            }
          }
        })
        .state('mails.details', {
          url: '/:id',
          parent: 'mails',
          views: {
            'detailsList@home': {
              templateUrl: 'app/mailDetails/mailDetails.html',
              controller: 'MailDetailsController',
              controllerAs: 'mailDetails'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  );
