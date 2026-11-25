const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "User with this email already exists"]
    },
    password: String
});

module.exports = mongoose.model("users", userModel);