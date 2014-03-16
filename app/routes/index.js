export default Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  redirect: function() {
    var hash = window.location.search;
    if (hash !== "") {
      var pars = hash.split('&');
      var tmp = pars[0].split("=")
      if (tmp[0] == "?access_token")
        localStorage.setItem("access_token", tmp[1]);
    }
  }
});
