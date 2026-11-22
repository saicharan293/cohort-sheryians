const express = require('express');
const userModel = require('../models/user.model');

const authRouter = express.Router();


// /api/auth/register 
authRouter.post("/register", async(req, res) =>{
    const { email, name, password} = req.body;

    const doesUserAlreadyExists = await userModel.findOne(({ email }));

    if(doesUserAlreadyExists){
        res.status(409).json({
            message: "User with this email address already exists."
        });
    }

    const newUser = await userModel.create({
        email, password, name
    });

    res.status(201).json({
        message: "user registered successfully",
        newUser
    });
})

module.exports = authRouter;