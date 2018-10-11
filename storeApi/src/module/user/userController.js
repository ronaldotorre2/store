/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /user
 * ---------------------------------------------------------*/

const express = require('express');
const jwt     = require('jsonwebtoken');

const authconfig = require('../../config/auth');

const User    = require('./userModel');

const controller = express.Router();


controller.get('/', function (req, res, next) {
    res.status(200).send({
        title:"Usuários"
    });
});

controller.post('/register',async(req,res)=>{
    const { mail } = req.body;

    try{
        if(await User.findOne({mail}))
            return res.status(400).send({error: 'User already exists!'});

        const user = await User.create(req.body);
        user.password = undefined;

        const token = jwt.sign({id: user.id}, authconfig.secret, {
            expiresIn: 86400,
        });

        return res.send({user, token});
    }
    catch(error){
        return res.status(400).send({error: 'Register user failed'});
    }
});

module.exports = controller;