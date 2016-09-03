var httpStatus = require('http-status-codes');
var basicAuth = require('basic-auth');
var authentication = require('../models/authentication');

//Authenticates Basic Auth
exports.checkBasicAuth = function(req, res, next) {
  var credentials = basicAuth(req);

  if (credentials) {
    return authentication.basicAuth(credentials.name, credentials.pass)
      .then((value) => (value) ? next() : next(wrapUnauthorizedError('Invalid credentials')))
      .catch((err) => next(wrapUnauthorizedError(err)));
  }

  next(wrapUnauthorizedError('Invalid credentials'));
};

var wrapUnauthorizedError = function(error) {
  var err = new Error(httpStatus.getStatusText(httpStatus.UNAUTHORIZED) + ': ' + error);
  err.status = httpStatus.UNAUTHORIZED;

  return err;
}
