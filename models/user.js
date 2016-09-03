var _ = require('underscore');
var Promise = require('bluebird');
var DATABASE = require('../DATABASE');

function User() {};
module.exports = User;

User.all = function() {
  var allUsers = DATABASE.map((data) => data.user_info);
  var filteredUsers = []
  allUsers.filter((user) => {
  	var userIsNotInFilteredList = filteredUsers.filter((f) => user.email === f.email).length == 0
  	if(userIsNotInFilteredList) filteredUsers.push(user);
  })
  return filteredUsers;
}

User.getAllPrints = function(email) {
  return DATABASE.filter((data) => data.user_info.email === email);
}

User.getSinglePrint = function(email, print_id) {
  return DATABASE.filter((data) => data.user_info.email === email)[print_id];
}