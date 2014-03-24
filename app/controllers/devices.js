export default Ember.ArrayController.extend({
  init: function() {
    this._super();
    console.log(this.get('model'));
    debugger;
  }
});