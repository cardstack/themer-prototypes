/* eslint-env node */
'use strict';

export default function(environment) {
  return {
    delivery: ['header'],
    enabled: true,
    failTests: true,
    policy: {
      'default-src':  ["'self'"],
      'script-src':   ["'self'"],
      'font-src':     ["*"],
      'connect-src':  ["'self'"],
      'img-src':      ["'self'"],
      'style-src':    ["'self'"],
      'media-src':    ["'self'"],
    },
    reportOnly: true,
  };
}