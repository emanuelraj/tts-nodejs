const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TenantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    super_admin:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    working_technologies:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Technologies'
        }
    ],
    interested_technologies:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Technologies'
        }
    ]
}, {
    id: false,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: false, setters: false },
    timestamps: true,
    // id: false
});

module.exports = mongoose.model('Tenants', TenantsSchema);