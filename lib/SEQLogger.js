"use strict";

let process = require('process');
let seq = require('seq-logging');

let seqServer = 'http://localhost:5341';

var SeqLogging = {
	informationLog: function (req, callback) {
		let logger = new seq.Logger({
			serverUrl: seqServer,
			apiKey: req.body.apikey,
			onError: e => { throw new Error(e); } });

		logger.emit({
			timestamp: new Date(),
			level: 'Information',
			messageTemplate: req.body.message || 'Empty message',
			properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || '',
				Other: req.body.other || ''
			}
		});

		//Catch Promise Error when sending the log message to seq-logging
		logger.close().then(() => {
			console.log('Message Sent');
			callback("", "Done");
		}).catch((error) => {
			console.log('Error! with the SEQ server');
			callback("Error! " + error, "");
			//console.log(error);
		});
	},

	warningLog: function (req, callback) {
		let logger = new seq.Logger({
			serverUrl: seqServer,
			apiKey: req.body.apikey,
			onError: e => { throw new Error(e); } });

		logger.emit({
			timestamp: new Date(),
			level: 'Warning',
			messageTemplate: req.body.message || 'Empty message',
			properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || '',
				Other: req.body.other || ''
			}
		});

		//Catch Promise Error when sending the log message to seq-logging
		logger.close().then(() => {
			console.log('Message Sent');
			callback("", "Done");
		}).catch((error) => {
			console.log('Error! with the SEQ server');
			callback("Error! " + error, "");
			//console.log(error);
		});
	},

	errorLog: function (req, callback) {
		let logger = new seq.Logger({
			serverUrl: seqServer,
			apiKey: req.body.apikey,
			onError: e => { throw new Error(e); } });

		logger.emit({
			timestamp: new Date(),
			level: 'Error',
			messageTemplate: req.body.message || 'Empty message',
			properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || '',
				Other: req.body.other || ''
			}
		});

		//Catch Promise Error when sending the log message to seq-logging
		logger.close().then(() => {
			console.log('Message Sent');
			callback("", "Done");
		}).catch((error) => {
			console.log('Error! with the SEQ server');
			callback("Error! " + error, "");
			//console.log(error);
		});
	}

}

module.exports = SeqLogging;
