'use strict';

var unifyApp = angular.module('unifyApp.controllers');

unifyApp.controller("loginController", function ($scope, $http, $location, $translate, ENV) {

  $scope.prueba = function () {
    console.log("Usuario: "+$scope.user.name+" Email: "+$scope.user.email+" Pass: "+$scope.user.password);
  };
  $scope.login = function () {
    console.log("PROBANDO!");
    $http.get('http://localhost:8080/auth/facebook').success(function (data) {
      //$location.path("/bookings");
      console.log(data);
    });
  };
});
