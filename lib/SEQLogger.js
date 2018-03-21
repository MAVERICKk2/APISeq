"use strict";

let process = require('process');
let seq = require('seq-logging');

var SeqLogging = {
    informationLog: function(req){
        let logger = new seq.Logger({ serverUrl: 'http://localhost:5341', apiKey: req.body.apikey });

        logger.emit({
            timestamp: new Date(),
            level: 'Information',
            messageTemplate: req.body.message || 'Empty message',
            properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || ''
            }
        })

        logger.close();
    },

    warningLog: function(req){
        let logger = new seq.Logger({ serverUrl: 'http://localhost:5341', apiKey: req.body.apikey });

        logger.emit({
            timestamp: new Date(),
            level: 'Warning',
            messageTemplate: req.body.message || 'Empty message',
            properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || ''
            }
        });

        logger.close();
    },

    errorLog: function(req){
        let logger = new seq.Logger({ serverUrl: 'http://localhost:5341', apiKey: req.body.apikey });

        logger.emit({
            timestamp: new Date(),
            level: 'Error',
            messageTemplate: req.body.message || 'Empty message',
            properties: {
				IP: req.body.ip || '',//req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				Machine: req.body.machine || '',
				User: req.body.user || '',
				OS: req.body.os || '',
				Browser: req.body.browser || ''
            }
        });

        logger.close();
    }

}

module.exports = SeqLogging;
