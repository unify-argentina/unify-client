'use strict';

var unifyApp = angular.module('unifyApp.controllers');

unifyApp.controller("loginController", function ($scope, $http, $auth, $location, $translate, ENV) {

  $scope.prueba = function () {
    console.log("Usuario: "+$scope.user.name+" Email: "+$scope.user.email+" Pass: "+$scope.user.password);
  };

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
         console.log('You have successfully logged in');
      })
      .catch(function(response) {
        console.log(response.data ? response.data.message : response);
      });
    };

        /**
     * Link third-party provider.
     */
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
           console.log('You have successfully linked ' + provider + ' account');
        })
        .catch(function(response) {
          console.log(response.data.message);
        });
    };

    /**
     * Unlink third-party provider.
     */
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          console.log('You have successfully unlinked ' + provider + ' account');
        })
        .then(function() {
          $scope.getProfile();
        })
        .catch(function(response) {
          console.log(response.data ? response.data.message : 'Could not unlink ' + provider + ' account');
        });
    };
});
