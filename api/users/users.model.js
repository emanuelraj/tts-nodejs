const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const UsersSchema = new Schema({
    first_name: {
        type: String
    },
    last_name:{
        type: String,
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other']
    },
    user_id: {
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    official_email: {
        type: String,
    },
    salary: {
        type: String,
    },
    working_technologies: [{
        type: Schema.Types.ObjectId,
        ref: 'Technologies'
    }],
    interested_technologies: [{
        type: Schema.Types.ObjectId,
        ref: 'Technologies'
    }],
    is_idividual: {
        type: Boolean, default: false
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Tenants'  
    }, 
    roles: [
        {
            tenant: {
                type: Schema.Types.ObjectId,
                ref: 'Tenants'  
            },
            role: {
                type: String
            }
        }
    ],
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    id: false,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: false, setters: false },
    timestamps: true,
    // id: false
});


UsersSchema.pre('save', function(next) {
    // only hash the password if it has been modified (or is new)
    //if (!user.isModified('password')) return next();

    // generate a salt
    console.log("user password ", this.password);
    this.password = bcrypt.hashSync(this.password, 8);
    return next();

    // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    //     if (err) return next(err);

    //     // hash the password using our new salt
    //     bcrypt.hash(user.password, salt, function(err, hash) {
    //         if (err) return next(err);

    //         // override the cleartext password with the hashed one
    //         user.password = hash;
    //         next();
    //     });
    // });
});

module.exports = mongoose.model('Users', UsersSchema);