
movieStubApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'movieStubController'
        }).when('/movie/:id', {
            templateUrl: 'views/movie.html',
            controller: 'movieDetailsController'
        }).when('/bookings', {
            templateUrl: 'views/bookings.html',
            controller: 'bookingDetailsController'
        }).when('/bookTickets/:id', {
            templateUrl: 'views/bookTickets.html',
            controller: 'bookTicketsController'
        }).otherwise({
            redirectTo: '/'
        });
});
