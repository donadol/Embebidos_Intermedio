const express = require("express");

var CommandController = require('../controllers/command');
var SignalController = require('../controllers/signal');

var apiRoutes = express.Router(),
    commandRoutes = express.Router(),
    signalRoutes = express.Router();
    
apiRoutes.use("/signal", signalRoutes);

signalRoutes.get ("/", SignalController.getSignals);
signalRoutes.post("/", SignalController.saveSignal);

apiRoutes.use("/command", commandRoutes);

commandRoutes.get ("/", CommandController.getCommands);
commandRoutes.post ("/", CommandController.saveCommand);

module.exports = apiRoutes;