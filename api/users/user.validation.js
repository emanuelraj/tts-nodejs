const { check, validationResult } = require('express-validator/check');

module.exports = {
    create: [
        check('first_name').exists(),
        check('last_name').optional(),
        check('gender').exists(),
        check('user_id').exists(),
        check('email').exists(),
        check('password').exists(),
    ]
}