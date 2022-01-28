
const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const authSchema = new Schema({
    username: {
        type: String,
        index: true,
        required: true,
        unique:true, 
    },
    age: {
        type: Number,
        index: true, 
        unique: true
    },
    score: {
        type: Number,
        index: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: { createdAt: 'created', updatedAt: 'updated' }});

authSchema.plugin(uniqueValidator);
authSchema.methods.toJSON = require('./toJSON');


module.exports = mongoose.model('AuthSchema', authSchema, 'auth');