export default Ember.Route.extend({
  
  model: function() {
    var url = "http://api.lelylan.com/devices.json";
    var header = "Bearer " + localStorage.getItem('access_token');
  
    Em.$.ajax(url, {
      headers: {"Authorization": header},
      success: function(res) {
        return res;
      },
      error: function(err) {
        console.log('error ' + err);
      }
    });
  
  }

});