const express = require('express');
const userModel = require('../models/user.model');
const authRouter = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


// POST /api/auth/register 
authRouter.post('/register', async (req, res) =>{
    const { email, password, name } = req.body;

    const doesUserExists = await userModel.findOne({email});

    if(doesUserExists){
        return res.status(409).json({
            message: 'User already exists'
        });
    }

    const newuser = await userModel.create(
        {
            name, 
            email, 
            password: crypto.createHash('sha256').update(password).digest('hex')
        }
    );

    const token = jwt.sign({id: newuser._id}, process.env.JWT_SECRET, { expiresIn : "1hr"});

    res.cookie("token", token);

    res.status(201).json({
        message: "User created successfully",
        user: {
            name: newuser.name,
            email: newuser.email
        }
    });
});

authRouter.get("/get-me", async(req, res) =>{
    const token = req.cookies.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    const user = await userModel.findById({_id: decoded.id});

    res.status(200).json({
        message: "decode success",
        user
    })

});

authRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({ email });
    if(!user){
        return res.status(404).json({message: "user not found"});
    }

    const matchedPassword = user.password == crypto.createHash('sha256').update(password).digest('hex');

    if(!matchedPassword){
        return res.status(200).json({
            message: "Invalid login"
        })
    };

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn : "1h"});
    res.cookie('token', token);
    res.status(200).json({
        message: "login succesful"
    })
})

module.exports = authRouter;