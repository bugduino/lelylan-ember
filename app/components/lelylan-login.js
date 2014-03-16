export default Ember.Component.extend({
  classNames: ['lelylan-login'],
  actions: {
    signIn: function() {
      App.oauth.authorize();
    }
  }
});