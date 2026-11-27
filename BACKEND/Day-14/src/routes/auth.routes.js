const express = require('express');
const userModel = require('../models/user.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();


// POST /api/auth/register
authRouter.post('/register', async(req, res) => {
    const { email, username, password, bio, profileImage } = req.body;

    // const doesUserExistsByEmail = await userModel.findOne({ email });

    // if(doesUserExistsByEmail){
    //     return res.status(409).json({
    //         message: "User already exists with this email"
    //     });
    // };

    // const doesUserExistsByUserName = await userModel.findOne({ username });

    // if(doesUserExistsByUserName){
    //     return res.status(409).json({
    //         message: "User already exists by this user name"
    //     });
    // }

    const isUserExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(isUserExists){
        return res.status(409).json({
            message: "User already exists" + (isUserExists.email == email ? "Email already exists": "Username already exists")
        });
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const user = await userModel.create({
        username, email, password: hash, profileImage, bio
    });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User registered successful.",
        user:{
            email : user.email,
            username : user.username,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })

});

module.exports = authRouter;