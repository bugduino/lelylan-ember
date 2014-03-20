export default Ember.OAuth2.config = {
  lelylan: {
    clientId: "xxx",
    authBaseUri: 'http://people.lelylan.com/oauth/authorize',
    redirectUri: 'http://localhost:8000/vendor/callback',
    client_secret: "xxx",
    scope: 'devices',
    statePrefix: "lelylan"
  } 
};

 //Ember.OAuth2.reopen({ onSuccess: function() { return console.log('hello, onSuccess') } });
  //Ember.OAuth2.reopen({ onError: function() { return 'hello, onError' } });
