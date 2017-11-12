var Command = require("../models/command");
var Commands = require("../collections/commands");

exports.getCommands = function(req, res, next){
  Commands.forge()
  .orderBy('created_at','DESC')
  .fetch()
  .then(function(commandsCollection){
    res.json({
      success : true,
      data : commandsCollection.toJSON()
    });
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
};

// GET - Get most recent command
exports.getMostRecentCommand = function (req, res, next)
{
  Command.forge()
  .orderBy('created_at','DESC')
  .fetchOne()
  .then(function(commandsCollection){
    res.json({
      success : true,
      data : commandsCollection.toJSON()
    });
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
};

exports.saveCommand = function (req, res, next){
  Command.forge({
    text: req.body.text
  })
  .save()
  .then(function(newCommand){
    res.json({
      success : true
    });
  })
  .catch(function(err){
    res.status(500).json({
      sucess : false,
      data : { message : err.message }
    });
  });
};