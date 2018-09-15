const { check, validationResult } = require('express-validator/check');
const Technologies = require('../api/technologies/technologies.model');

const Utils = {
    apiResponse: function (res, code, message, data, token) {
        return res.status(code).json({
            message: message,
            data: data,
            token: token,
        });
    },
    validateResult: function (req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            Utils.apiResponse(res, 422, "Validation Failed", errors.array(), null);
        }
        return next();
    },
    createTechnology: function (techObject){
        return Technologies.create(techObject)
    }
}

module.exports = Utils