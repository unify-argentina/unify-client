

unifyApp.service('AuthenticationService', function ($http, $auth, $state, ENV) {

	var userId;
	
    var getUserId = function() {
    	if(userId==null){
    		setUserId(localStorage.getItem(ENV.storageUserId));
    	}
    	return userId; 
	};

    var setUserId = function(value) { 
    	localStorage.setItem(ENV.storageUserId, value);
    	userId=value; 
    };
    
    var signup = function(user) {
		console.log(user.name);
		$auth.signup({
			name: user.name,
			email: user.email,
			password: user.password,
			confirm_password: user.confirmpassword
		}).then(function() {
			setUserId(response.data.user._id);
	        localStorage.setItem('response', JSON.stringify(response));
	        console.log('You have successfully logged in: '+response.data.token); 
	        $state.go('dashboard');
	      })
		.catch(function(response) {
	        console.log(response.data ? response.data.message : response);
		});
    };

    var login = function(user) {
	    $auth.login({ 
	      email: user.email, 
	      password: user.password 
	    }).then(function() {
			setUserId(response.data.user._id);
	        localStorage.setItem('response', JSON.stringify(response));
	        console.log('You have successfully logged in: '+response.data.token); 
	        $state.go('dashboard');
	      })
	      .catch(function(response) {
	        console.log(response.data ? response.data.message : response);
	      });
	  };

	var authenticate = function(provider) {
	    $auth.authenticate(provider)
	      .then(function(response) {
			setUserId(response.data.user._id);
	        localStorage.setItem('response', JSON.stringify(response));
	        console.log('You have successfully logged in: '+response.data.token); 
	      })
	      .catch(function(response) {
	        console.log(response.data ? response.data.message : response);
	      });
	  };

	var unlink  = function(provider) {
		var req = {
			 method: 'DELETE',
		 	url: ENV.apiEndPoint+'/auth/'+provider,
		 	headers: {
		   		'Authorization': 'Bearer'+ ' ' +localStorage.getItem("satellizer_token")
			}
		}
		$http(req)
		.then(function(response) {
	    	localStorage.setItem('response', JSON.stringify(response));
	    	localStorage.setItem('satellizer_token', response.data.token);
	        console.log('You have successfully unlogged in: '+response.data.token); 
	        $state.go('dashboard');
	    })
	    .catch(function(response) {
	        console.log("ERROR: "+response.data ? response.data.message : response);
	    });
	};
	
	return {
		signup : signup,
		login : login,
		authenticate : authenticate,
		unlink: unlink,
		getUserId : getUserId
    };

});