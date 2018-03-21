"use strict";

let seqLog = require("../lib/SEQLogger");
/*
 json expected

	{
	"apikey": "NFn3QVPYlyOkOhAGydzQ",
	"message": "The End is Near",
	"ip": "127.0.0.0",
	"machine": "PB039EV5",
	"user": "U11231",
	"os": "Windows",
	"browser": "Firefox"
	}
*/
exports.information = function(req, res) {
	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400);
		//res.send("Provide a valid application Key");
		res.json({"response": "Provide a valid application Key"});
	} else{
		seqLog.informationLog(req);
		res.status(200);
		res.json({"response": "Your information message was sent"});
	}
};

exports.warning = function(req, res) {
	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400);
		res.json({"response": "Provide a valid application Key"});
	} else {
		seqLog.warningLog(req);
		res.status(200);
		res.json({"response": "Your information message was sent"});
	}
};

exports.error = function(req, res) {
	if (req.body.apikey === null || req.body.apikey === undefined || req.body.apikey === '') {
		res.status(400);
		res.json({"response": "Provide a valid application Key"});
	} else {
		seqLog.errorLog(req);
		res.status(200);
		res.json({"response": "Your information message was sent"});
	}
};
