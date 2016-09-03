var _ = require('underscore');
var Promise = require('bluebird');
var DATABASE = require('../DATABASE');

function User() {};
module.exports = User;

User.all = function() {
  var allUsers = DATABASE.map((data) => data.user_info.email);
  return _.uniq(allUsers);
}

User.getAllPrints = function(email) {
  return DATABASE.filter((data) => data.user_info.email === email);
}

User.getSinglePrint = function(email, print_id) {
  return DATABASE.filter((data) => data.user_info.email === email)[print_id];
}