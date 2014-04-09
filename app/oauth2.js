export default Ember.OAuth2.config = {
  lelylan: {
    clientId: "e466b1c8157d1a7f459304a3634ec4a2db35c824b69727632c3a97e6c4bc2bf6",
    authBaseUri: 'http://people.lelylan.com/oauth/authorize',
    redirectUri: 'http://localhost:8000/vendor/callback',
    client_secret: "xxx",
    scope: 'devices',
    statePrefix: "lelylan"
  } 
};

 //Ember.OAuth2.reopen({ onSuccess: function() { return console.log('hello, onSuccess') } });
  //Ember.OAuth2.reopen({ onError: function() { return 'hello, onError' } });
