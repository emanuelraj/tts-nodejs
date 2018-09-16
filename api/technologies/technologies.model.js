const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TechnologiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    companies_working:[{
        type: Schema.Types.ObjectId,
        ref: 'Tenants'
    }],
    companies_interested:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Tenants'
        }
    ],
    individual_working: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ],
    individual_interested: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ],
    is_active:{
        type: Boolean,
        default: false
    }
}, {
    id: false,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: false, setters: false },
    timestamps: true,
    // id: false
});

module.exports = mongoose.model('Technologies', TechnologiesSchema);