'use strict';

const _ = require('lodash');

module.exports = {
    index: (req, res) => {
        res.status(200).json({message: "Initial Build"});
    }
}