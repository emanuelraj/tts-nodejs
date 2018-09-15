'use strict';

const Users = require('./users.model');
const Utils = require('../../utils/common');

module.exports = {
    create: (req, res) =>{
        Users.create(req.body)
        .then((user_details)=>{
            Utils.apiResponse(res, 201, "User Registered Successfully", user_details, null);
        })
        .catch((err)=>{
            Utils.apiResponse(res, 404, "Registration failed", err, null);
        })
    }
}