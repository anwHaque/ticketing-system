const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');


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
    },
    encry_password: {
        type: String,
        trim: true,    
    },
    salt: String,
    role: {
        type: Number,
        default: 0,
    },

}, { timestamps: true });

userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv1();
        this.encry_password = this.securedPassword(password);
    })
    .get(function(){
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainpassword){
        return this.securedPassword(plainpassword) === this.encry_password;
    },

    securedPassword: function(plainpassword){
        if(!plainpassword) return "";

        try {
            return crypto.createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex')
        } catch(err) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema);
