var ApplicationAdapter =  DS.RESTAdapter.extend({
});

DS.RESTAdapter.reopen({
  host: 'http://api.lelylan.com/',
  headers: {
    "Authorization": "Bearer " + localStorage.getItem('access_token')
  }
});

export default ApplicationAdapter;