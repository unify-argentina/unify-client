
var movieStubApp = angular.module('movieStubApp', ['ngResource', 'ui.router', 'config', 'pascalprecht.translate'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    });
    $stateProvider.state('movie', {
      url: '#/movie/:id',
      templateUrl: 'views/movie.html'
    });
    $stateProvider.state('bookings', {
      url: '#/bookings',
      templateUrl: 'views/bookings.html'
    });
    $stateProvider.state('bookTickets', {
      url: '#/bookTickets/:id',
      templateUrl: 'views/bookTickets.html'
    });
 })
.config(function ($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: 'scripts/i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('es_AR');
});

//.config(function($translateProvider) {
//  $translateProvider.useStaticFilesLoader({
//    'prefix': 'i18n/',
//    'suffix': '.json'
//  });
////  $translateProvider.translations('en', {
////    HEADLINE: 'Book Movie Tickets',
////    INTRO_TEXT: 'And it has i18n support!',
////    BUTTON_TEXT_EN: 'english',
////    BUTTON_TEXT_ES: 'spanish'
////  })
////  .translations('es', {
////    HEADLINE: 'Reserva entradas de peliculas',
////    INTRO_TEXT: 'y tiene soporte de i18n!',
////    BUTTON_TEXT_EN: 'Ingles',
////    BUTTON_TEXT_ES: 'Español'
////  });
//  $translateProvider.preferredLanguage('es');
//})
//;
