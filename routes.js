/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

    // Insert routes below
    // app.use('/api/things', require('./api/thing'));

    app.use('/api/v1/auths', require('./api/auths'));    
    app.use('/api/v1/users', require('./api/users'));    
    app.use('/api/v1/technologies', require('./api/technologies'));
};