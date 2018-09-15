'use strict';
const express = require('express');
const controller = require('./users.controller');
const router = express.Router();
const userValidator = require('./user.validation');
const Utils = require('../../utils/common');


router.post('/', userValidator.create, Utils.validateResult, controller.create);

module.exports = router;