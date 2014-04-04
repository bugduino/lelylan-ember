export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload, id, requestType) {
    var devices = { "devices": payload };
    debugger;
    return this._super(store, type, devices, id, requestType);
  }
});