export default Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  redirect: function() {
    var search = window.location.search;
    if (search !== "") {
      var params = search.split('&');
      var tmp = params[0].split("=");
      if (tmp[0] === "?access_token")
        localStorage.setItem("access_token", tmp[1]);
    }
  }
});
