import Resolver from 'ember/resolver';
import oauth from 'appkit/oauth2';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default'],
  oauth: Ember.OAuth2.create({
    providerId: 'lelylan'
  })
});

export default App;
