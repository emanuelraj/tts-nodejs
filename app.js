/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.TTS_NODE_ENV = process.env.TTS_NODE_ENV || 'development';

const argv = require('minimist')(process.argv.slice(2));
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/environment');
// const dbService = require('./api/services/dbConnections');
// let authService = require('./auth/auth.service');
// var services = require('./services');
const path = require('path');

// let kafka = require('kafka-node'),
//     Producer = kafka.Producer,
//     Consumer = kafka.Consumer;

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.db.URI, config.mongo.options);

mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

// Populate DB with sample data
// if(config.seedDB) { require('./config/seed'); }

// Setup server

const app = express();
// app.use(express.static(path.join(__dirname, '../uploads')));
// serve swagger-ui
// if (argv.doc)
//     app.use('/api/docs', express.static(path.join(__dirname, 'swagger-ui')));
// if(argv.dash)
//app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
// app.use('/', express.static(path.join(__dirname, '../admin-dash/dist')));

// ****************

const server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
require('./config/seed');

// Start server
server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;