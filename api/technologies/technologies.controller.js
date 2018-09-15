'use strict';

const Tecnologies = require('./technologies.model');
const Utils = require('../../utils/common');

module.exports = {
    create: (req, res) =>{
        Utils.createTechnology(req.body)
        .then((technologyDetails)=>{
            Utils.apiResponse(res, 201, "Technology Created Successfully", technologyDetails, null);
        })
        .catch((err)=>{
            Utils.apiResponse(res, 404, "Technology Creation failed", err, null);
        }) 
    }
}