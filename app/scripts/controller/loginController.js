'use strict';

var unifyApp = angular.module('unifyApp.controllers');

unifyApp.controller("loginController", function ($scope, $http, $location, $translate, ENV) {

    $scope.login = function () {
        console.log("PROBANDO!");
        $http.get('http://localhost:8080/auth/facebook').success(function (data) {
                //$location.path("/bookings");
                return data;
            });
    };
});