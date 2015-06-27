'use strict';

var unifyApp = angular.module('unifyApp.controllers');

unifyApp.controller("signUpController", function ($scope, $http, $auth, $state, $translate, ENV) {
    $scope.signup = function() {
      console.log($scope.user.name);
      $auth.signup({
        name: $scope.user.name,
        email: $scope.user.email,
        password: $scope.user.password,
        confirm_password: $scope.user.confirmpassword
      }).catch(function(response) {
        console.log(response);
      });
    };
  });