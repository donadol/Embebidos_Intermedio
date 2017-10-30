const express = require("express");

var apiRoutes = express.Router(),
    commandRoutes = express.Router(),
    orderRoutes = express.Router();
    
apiRoutes.use("/order", orderRoutes);

orderRoutes.get ("/", function(req, res) {
  res.send('Page under construction.');
});

module.exports = apiRoutes;