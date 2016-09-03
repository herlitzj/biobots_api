var httpStatus = require('http-status-codes');
var express = require('express');
var router = express.Router();
var User = require('../models/user');

// returns an array of all user emails
router.get('/all', function(req, res) {
	var allUsers = {users: User.all()};
  if(allUsers.users) res.status(httpStatus.OK).json(allUsers);
	else res.sendStatus(httpStatus.NOT_FOUND)
})

// returns the print history for a given user
router.get('/:email/prints', function(req, res) {
  var email = req.params.email;
  var allPrints = {all_prints: User.getAllPrints(email)};
  if(allPrints.all_prints.length > 0) res.status(httpStatus.OK).json(allPrints);
	else res.sendStatus(httpStatus.NOT_FOUND)
});

// returns a single print instance
router.get('/:email/prints/:print_id', function(req, res) {
	var email = req.params.email;
	var print_id = req.params.print_id;
	var singlePrint = {print: User.getSinglePrint(email, print_id)};
	if(singlePrint.print) res.status(httpStatus.OK).json(singlePrint);
	else res.sendStatus(httpStatus.NOT_FOUND)
})

// Exports
module.exports = router;
