/*var configDB = require('../../knexfile');
var Knex = require('knex')(configDB);*/
var Knex = require("../../config/knexfile");

var Bookshelf = require('bookshelf')(Knex);

module.exports = Bookshelf;