
var movieStubApp = angular.module('movieStubApp', ['ngResource', 'ui.router', 'config'])
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
 });
