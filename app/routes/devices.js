export default Ember.Route.extend({
  model: function() {
    this.get('store').find('device');
  },
  setupController: function(controller, model) {
  }
});