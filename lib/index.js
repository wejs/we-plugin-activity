
var plugin = function(sails) {

  var hook =  {
    // Implicit default configuration
    // (mixed in to `sails.config`)
    defaults: {},

    initialize: function(cb) {
      sails.on('we:model:post:afterCreate', function(post){
        // create one activity for this post create
        sails.models.activity.create({
          actor: post.creator,
          verb: 'post',
          action: 'created',
          modelName: 'post',
          modelId: post.id
        }).exec(function(error, activity) {
          // if has one error in activity creation, log it
          if (error) sails.log.error('PostModel:create: error on create Activity: ',error, activity);
        });
      });

      cb();
    }
  }

  return hook;
}

// load init function
plugin.init = require('./init.js');
// load modelsAlter function
plugin.modelsAlter = require('./modelsAlter.js');

// exports it
module.exports = plugin;
