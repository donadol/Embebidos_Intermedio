const express = require("express");
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

var api = require('./api/routes/api');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Page under construction.');
});

app.use('/api', api);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, function() {
  console.log("✔ Express server listening on port %d in %s mode", port, app.get('env'));
});
