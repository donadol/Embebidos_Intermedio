var Bookshelf = require("../commons/bookshelf");
//Bookshelf.plugin('registry');

var command = Bookshelf.Model.extend({
  tableName : 'commands'//,
  //hasTimestamps: ['created_at']
});

module.exports = command;