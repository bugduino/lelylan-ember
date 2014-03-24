var attr = DS.attr;

export default DS.Model.extend({
  uri: attr(),
  id: attr(),
  name: attr(),
  type: attr(),
  physical: attr(),
  owner: attr(),
  maker: attr(),
  activated: attr(),
  categories: attr(),
  properties: attr()
});