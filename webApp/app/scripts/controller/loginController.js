'use strict';

var unifyApp = angular.module('unifyApp.controllers');

unifyApp.controller("loginController", function ($scope, $http, $auth, $state, $translate, ENV) {

  $scope.login = function() {
    $auth.login({ 
      email: $scope.user.email, 
      password: $scope.user.password 
    }).then(function() {
        localStorage.setItem('response', JSON.stringify(response));
        console.log('You have successfully logged in: '+response.data); 
        $state.go('dashboard');
      })
      .catch(function(response) {
        console.log(response.data ? response.data.message : response);
      });
  };

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function(response) {
        localStorage.setItem('response', JSON.stringify(response));
        console.log('You have successfully logged in: '+response.data); 
        $state.go('dashboard');
      })
      .catch(function(response) {
        console.log(response.data ? response.data.message : response);
      });
  };
});
