export default Ember.OAuth2.config = {
  lelylan: {
    clientId: "e466b1c8157d1a7f459304a3634ec4a2db35c824b69727632c3a97e6c4bc2bf6",
    authBaseUri: 'http://people.lelylan.com/oauth/authorize',
    redirectUri: 'http://localhost:8000/vendor/callback',
    client_secret: "95e597d208d610b4fc72696fbe4b552dab61e1f8ca0113da1ed7cc3df7f474ee",
    scope: 'devices',
    statePrefix: "lelylan"
  } 
};

 //Ember.OAuth2.reopen({ onSuccess: function() { return console.log('hello, onSuccess') } });
  //Ember.OAuth2.reopen({ onError: function() { return 'hello, onError' } });