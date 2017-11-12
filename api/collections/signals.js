var Bookshelf = require('../commons/bookshelf');
var Signal = require('../models/signal');

var Signals = Bookshelf.Collection.extend({
	model : Signal
});

module.exports = Signals;
