const { check, validationResult } = require('express-validator/check');

module.exports = {
    create: [
        check('name').exists()
    ]
}