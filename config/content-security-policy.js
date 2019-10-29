/* eslint-env node */
'use strict';

export default function(environment) {
  return {
    delivery: ['header'],
    enabled: true,
    failTests: true,
    policy: {
      'default-src':  ["*"],
      'script-src':   ["*"],
      'font-src':     ["*"],
      'connect-src':  ["*"],
      'img-src':      ["*"],
      'style-src':    ["*"],
      'media-src':    ["*"],
    },
    reportOnly: true,
  };
}