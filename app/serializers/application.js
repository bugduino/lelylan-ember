export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload, id, requestType) {
    var devices = { "devices": payload };
    return this._super(store, type, devices, id, requestType);
  },
  normalize: function(type, hash, property) {
    var json = { id: hash.id };
    delete hash._id;
    for (var prop in hash) {
      json[prop] = hash[prop]; 
    }
    return this._super(type, json, property);
  }
});