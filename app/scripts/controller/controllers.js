movieStubApp.controller("movieStubController", function ($scope, movieStubFactory, $location, $translate, ENV) {
    $scope.headerSrc = "views/header.html";
 
    $scope.movies = movieStubFactory.query();
 
    $scope.currMovie = null;
 
    $scope.name=ENV.name;

    console.log(ENV.varX);
    
    $scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currMovie = movie;
            }
        }
    };
 
    $scope.back = function () {
        window.history.back();
    };
 
    $scope.getCount = function (n) {
        return new Array(n);
    }
 
    $scope.isActive = function (route) {
        return route === $location.path();
    }
 
    $scope.isActivePath = function (route) {
        return ($location.path()).indexOf(route) >= 0;
    }

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});
 
movieStubApp.controller("movieDetailsController", function ($scope, $stateParams) {
    $scope.getMovieById($stateParams.id);
});
movieStubApp.controller("bookTicketsController", function ($scope, $http, $location, $stateParams) {
    $scope.getMovieById($stateParams.id);
    $scope.onlyNumbers = /^\d+$/;
    $scope.formData = {};
    $scope.formData.movie_id = $scope.currMovie.id;
    $scope.formData.movie_name = $scope.currMovie.name;
    $scope.formData.date = "Today"
 
    $scope.processForm = function () {
        console.log($scope.formData);
        $http({
            method: 'POST',
            url: 'http://moviestub.cloudno.de/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                $location.path("/bookings");
            });
    };
});
movieStubApp.controller("bookingDetailsController", function ($scope, movieStubBookingsFactory) {
    $scope.bookings = movieStubBookingsFactory.query();
});