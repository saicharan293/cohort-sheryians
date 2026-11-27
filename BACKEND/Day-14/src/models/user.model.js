const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: [true, "Already user name taken"],
        required: [true, "User name is required"]
    },
    email: {
        type: String,
        unique: [true, "User already exists with this email address"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/sai2001/profile-icon.jpg"
    }
})

module.exports = mongoose.model("users", userSchema);