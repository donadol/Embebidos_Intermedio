const express = require("express");

var CommandController = require('../controllers/command');

var apiRoutes = express.Router(),
    commandRoutes = express.Router(),
    signalRoutes = express.Router();
    
apiRoutes.use("/signal", signalRoutes);

signalRoutes.get ("/", function(req, res) {
  console.log("signal");
  res.send('Page under construction.');
});

//
apiRoutes.use("/command", commandRoutes);

commandRoutes.get ("/", CommandController.getCommands);
commandRoutes.post ("/", CommandController.saveCommand);

module.exports = apiRoutes;