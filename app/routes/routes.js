const express = require("express");
var path = require("path");
var Signal = require("../../api/models/signal");
var Signals=require("../../api/collections/signals");
var Commands=require("../../api/collections/commands");
//var CommandController = require('../controllers/command');
//var SignalController = require('../controllers/signal');

var appRoutes = express.Router(),
    commandRoutes = express.Router(),
    signalRoutes = express.Router();

appRoutes.get('/', function(req, res) {
  //res.send('Page under construction.');
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

appRoutes.use("/signal", signalRoutes);

signalRoutes.get ("/", function(req, res){
  var Signal;
  Signals.forge()
  .orderBy('created_at','DESC')
  .fetch()
  .then(function(signalsCollection){
    res.send(signalsCollection);
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
});

signalRoutes.get("/mostRecent", function(req, res){
  Signals.forge()
  .orderBy('created_at','DESC')
  .fetchOne()
  .then(function(signalsCollection){
    res.send(signalsCollection);
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
});

//signalRoutes.get ("/", function(req, res) {
//  console.log("signal");
//  res.send('Page under construction.');
//});

appRoutes.use("/command", commandRoutes);

commandRoutes.get("/", function(req, res){
  var Command;
  Commands.forge()
  .orderBy('created_at','DESC')
  .fetch()
  .then(function(commandsCollection){
    res.send(commandsCollection);
    
   // _.each(commandsCollection.models, function (model) { //I am looping over models using underscore, you can use any loop
      //console.log(model.attributes)
    //})
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
});

commandRoutes.get("/mostRecent", function(req, res){
  Commands.forge()
  .orderBy('created_at','DESC')
  .fetchOne()
  .then(function(commandsCollection){
    res.send(commandsCollection);
  })
  .catch(function(err){
    res.status(500).json({
      success : false,
      data : {message :err.message}
    });
  });
});
// commandRoutes.get ("/", CommandController.getCommands);
// commandRoutes.get ("/mostRecent", CommandController.saveCommand);

module.exports = appRoutes;