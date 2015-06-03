'use strict';

angular.module('unifyApp').config(function($authProvider) {

    $authProvider.facebook({
      url: 'http://localhost:8080/auth/facebook/callback',
      clientId: '805638479520745'
  
    });

  $authProvider.twitter({
    url: 'http://localhost:8080/auth/twitter'
  });

  $authProvider.google({
    clientId: '79996335280-gc0hh1efoo859u1lqaqct2v3u1larsrj.apps.googleusercontent.com',
    url: 'http://localhost:8080/auth/google'
  });
/*
    $authProvider.github({
      clientId: '0ba2600b1dbdb756688b'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.yahoo({
      clientId: 'dj0yJmk9dkNGM0RTOHpOM0ZsJmQ9WVdrOVlVTm9hVk0wTkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wMA--'
    });

    $authProvider.live({
      clientId: '000000004C12E68D'
    });

    $authProvider.twitter({
      url: '/auth/twitter'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      redirectUri: window.location.origin,
      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
*/
  });