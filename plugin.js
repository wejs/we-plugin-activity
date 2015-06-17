/**
 * We.js plugin config
 */

module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);
  // set plugin configs
  plugin.setConfigs({
    permissions: {
      'find_activity': {
        'group': 'activity',
        'title': 'Find activity',
        'description': 'Find and find all activity'
      }
    }
  });
  // set plugin routes
  plugin.setRoutes({
    // Activity
    'get /group/:groupId([0-9]+)/activity': {
      controller    : 'activity',
      action        : 'findGroupActivity',
      model         : 'activity',
      responseType  : 'json',
      permission    : 'find_activity'
    },
    'get /activity/:id([0-9]+)': {
      controller    : 'activity',
      action        : 'findOne',
      model         : 'activity',
      permission    : 'find_activity'
    },
    'get /activity': {
      controller    : 'activity',
      action        : 'find',
      model         : 'activity',
      permission    : 'find_activity'
    }
  });

  return plugin;
};
