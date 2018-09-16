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
    },
    index: (req, res) => {

        let aggregatePipe = [];

        let initialMatch = {
            $match:{
                is_active: false
            }
        }

        //aggregatePipe.push(initialMatch);

        let responseProject = {
            $project:{
                _id: 0,
                label: "$name",
                value: "$_id"
            }
        }

        aggregatePipe.push(responseProject);

        Tecnologies.aggregate(aggregatePipe)
        .then((technologyDetails)=>{
            Utils.apiResponse(res, 200, "Technologies Fetched Successfully", technologyDetails, null);
        })
        .catch((err)=>{
            Utils.apiResponse(res, 404, "Feteching Technologies failed", err, null);
        })
    }
}