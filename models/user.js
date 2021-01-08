const mongoose = require('mongoose');
const crypto = require('crypto');


var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    }
})


module.exports = mongoose.model("User", userSchema);
