'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('node_modules/codemirror/lib/codemirror.js')
  app.import('node_modules/codemirror/mode/javascript/javascript.js')
  app.import('node_modules/codemirror/lib/codemirror.css')

  return app.toTree();
};
