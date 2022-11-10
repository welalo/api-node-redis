const mongoose = require('mongoose');

const schemaUser = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, unique: true, required:true, lowercase: true},
        password: {type: String, minlength: 3, maxlength:20, required: true},
        rol: {type: String, required: true, enum: ['r','rw','rwa'], default: 'r'}
    },
    {
        timestamps : true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', schemaUser)
