var Signal = require("../models/signal");
var Signals = require("../collections/signals");

exports.getSignals = function(req, res, next){
  Signals.forge()
  .orderBy('created_at','DESC')
  .fetch()
  .then(function(signalsCollection){
    res.json({
      success : true,
      data : signalsCollection.toJSON()
    });
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
};

// GET - Get most recent signal
exports.getMostRecentSignal = function (req, res, next)
{
  Signal.forge()
  .orderBy('created_at','DESC')
  .fetchOne()
  .then(function(signalsCollection){
    res.json({
      success : true,
      data : signalsCollection.toJSON()
    });
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
};

exports.saveSignal = function (req, res, next){
  console.log('req.value = '+req.body.value);
  Signal.forge({
    value: req.body.value,
    type: req.body.type,
    created_at: req.body.created_at
  })
  .save()
  .then(function(newSignal){
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