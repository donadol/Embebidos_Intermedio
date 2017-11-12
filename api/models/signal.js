var Bookshelf = require("../commons/bookshelf");
//Bookshelf.plugin('registry');

var signal = Bookshelf.Model.extend({
  tableName : 'signals'//,
  //hasTimestamps: true
});

module.exports = signal;