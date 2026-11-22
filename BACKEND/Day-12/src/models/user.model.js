const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:{
        type: String,
        unique: [ true, "User already exists with this email address"]
    }
});

module.exports = mongoose.model("users", userSchema);