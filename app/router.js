import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cards', function() {
    this.route('event');
    this.route('generic');
    this.route('invoice');
  });
});

export default Router;
