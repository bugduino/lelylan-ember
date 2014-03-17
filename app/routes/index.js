export default Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  redirect: function() {
    var search = window.location.search;
    if (search !== "") {
      var params = search.split('&')[0].split("=");
      if (params[0].split('?')[1] === "access_token")
        localStorage.setItem("access_token", params[1]);
        //TODO do not refresh the page but removing query params from url
        window.location = window.location.origin + "/#/devices";
    }
  }
});
