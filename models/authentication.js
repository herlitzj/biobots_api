var changeCase = require('change-case');
var Promise = require('bluebird');
var crypto = require('crypto');

exports.basicAuth = function(user, pass) {
  var authenticated = false;
  if (user && pass) {
    var userKeyEnvVariable = changeCase.constantCase(user) + '_KEY';
    authenticated = (pass === process.env[userKeyEnvVariable]);
  }

  return authenticated;
}
