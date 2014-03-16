export default Ember.Controller.extend({
  queryParams: ['access_token'],
  access_token: null,

  setToken: function() {
    var token = this.get('access_token');
    if (token) {
      //localStorage.setItem('access_token', token);
    } else {

    }
  }.property('access_token')

});