unifyApp.controller("ProfileController", function ($scope, $http, ProfileService, AuthenticationService) {

	ProfileService.get({
		user_id: AuthenticationService.getUserId()
	},function(response){
		$scope.user = response.user;
	});

	$scope.authenticate = function(provider) {
		AuthenticationService.authenticate(provider);
	};

	$scope.unlink = function(provider) {
		AuthenticationService.unlink(provider);
	};
});