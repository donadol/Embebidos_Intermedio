var Bookshelf = require('../commons/bookshelf');
var Command = require('../models/command');

var Commands = Bookshelf.Collection.extend({
	model : Command
});

module.exports = Commands;
