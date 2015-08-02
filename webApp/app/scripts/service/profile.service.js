
unifyApp.factory('ProfileService', 	function($resource, ENV) {
		return $resource(ENV.apiEndPoint+'/api/user/:user_id', {
			user_id: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
);
