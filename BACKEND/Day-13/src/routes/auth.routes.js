
const userModel = require('../models/user.model');
const express = require('express');
const jwt  = require('jsonwebtoken');

const authRouter = express.Router();

authRouter.post('/register', async(req, res)=>{
    const { name, email, password }= req.body;

    const doesUserAlreadyExists = await userModel.findOne({email});

    if(doesUserAlreadyExists){  
        return res.status(409).json({
            message: "User already exists with this email"
        })
    }


    const newUser = await userModel.create({
        name,
        password,
        email
    })

    const token = jwt.sign({id: newUser._id, email: newUser.email}, process.env.JWT_SECRET);

    res.cookie('jwt_token', token);

    res.status(201).json({
        message: "User created successfully",
        token,
        newUser
    });
});

// /api/auth/protected
// (dummy) just for testing
authRouter.post('/protected',(req, res) => {
    console.log(req.cookies);

    res.status(200).json({
        message: 'this is protected route',
        cookie: req.cookies
    });
});

module.exports = authRouter;