export default Ember.Route.extend({
  model: function() {
    this.get('store').find('device').then( function(res) {
      debugger;
    });
  },
  afterModel: function(model, queryParams) {
    debugger;
  }
});