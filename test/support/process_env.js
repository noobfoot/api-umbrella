'use strict';

var _ = require('lodash'),
    path = require('path');

_.extend(exports, {
  envOverrides: {},

  env: function() {
    return _.merge({
      'PATH': [
        path.resolve(__dirname, '../bin'),
        path.resolve(__dirname, '../node_modules/.bin'),
        '/opt/api-umbrella/embedded/elasticsearch/bin',
        path.join(process.env.API_UMBRELLA_INSTALL_ROOT, 'embedded/sbin'),
        path.join(process.env.API_UMBRELLA_INSTALL_ROOT, 'embedded/bin'),
        '/opt/api-umbrella/embedded/sbin',
        '/opt/api-umbrella/embedded/bin',
        '/opt/api-umbrella/embedded/jre/bin',
        '/usr/local/sbin',
        '/usr/local/bin',
        '/usr/sbin',
        '/usr/bin',
        '/sbin',
        '/bin',
      ].join(':'),
    }, this.envOverrides);
  },

  overrideEnv: function(overrides) {
    this.envOverrides = overrides;
  },
});