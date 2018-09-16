'use strict';
const express = require('express');
const controller = require('./technologies.controller');
const router = express.Router();
const technologyValidator = require('./technologies.validation');
const Utils = require('../../utils/common');


router.post('/', technologyValidator.create, Utils.validateResult, controller.create);
router.get('/', controller.index);


module.exports = router;