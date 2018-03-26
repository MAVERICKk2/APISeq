"use strict";

let logging = require("../lib/SEQLogger");
/*
json expected

	{
	"apikey": "NFn3QVPYlyOkOhAGydzQ",
	"message": "The End is Near",
	"ip": "127.0.0.0",
	"machine": "PB039EV5",
	"user": "U11231",
	"location": "Panama",
	"os": "Windows",
	"browser": "Firefox",
	"other": ""
	}
*/
exports.getInformation = function(req, res) {
	res.redirect('/');
};

exports.information = function(req, res) {
	let message = '';

	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400).json({"response": "Provide a valid application Key"});
	} else{
		logging.informationLog(req, function(err, response){
			if (err !== '') {
				res.status(500).json({"response": "SEQ Server is not available!"});
			} else if (response !== '') {
				res.status(200).json({"response": "Your information message was sent"});
			}
		});
	}
};

exports.getWarning = function(req, res) {
	res.redirect('/');
};

exports.warning = function(req, res) {
	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400).json({"response": "Provide a valid application Key"});
	} else {
		logging.warningLog(req, function(err, response) {
			if (err !== '') {
				res.status(500).json({"response": "SEQ Server is not available!"});
			} else if (response !== '') {
				res.status(200).json({"response": "Your warning message was sent"});
			}
		});
	}
};

exports.getError = function(req, res) {
	res.redirect('/');
};

exports.error = function(req, res) {
	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400).json({"response": "Provide a valid application Key"});
	} else {
		logging.errorLog(req, function(err, response) {
			if (err !== '') {
				res.status(500).json({"response": "SEQ Server is not available!"});
			} else if (response !== '') {
				res.status(200).json({"response": "Your warning message was sent"});
			}
		});
	}
};
