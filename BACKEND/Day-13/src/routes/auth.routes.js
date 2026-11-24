
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

// POST /api/auth/login 
// Controller 

authRouter.post('/login', async(req, res) => {
    const{ email, password} = req.body;

    const user = await userModel.findOne({email});
    
    if(!user){
        return res.status(404).json({
            message: "User not found with this email address"
        });
    }

    const isPasswordMatched = user.password == password;
    if(!isPasswordMatched){
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.cookie('jwt_token', token);
    
    res.status(200).json({
        message: "user logged in.",
        user
    })
})

module.exports = authRouter;