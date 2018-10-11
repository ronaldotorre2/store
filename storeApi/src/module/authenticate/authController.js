/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /auth
 * ---------------------------------------------------------*/

const express    = require('express');
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');

const authconfig = require('../../config/auth');

const User       = require('../user/userModel');

const controller = express.Router();


controller.get('/', function (req, res, next) {
    res.status(200).send({
        title:"Autenticar"
    });
});

controller.post('/login', async(req, res)=>{
    const {mail,password} = req.body;

    try{
        const user = await User.findOne({mail}).select('+password');

        if(!user)
            return res.status(400).send({error: 'User not found!'});
        
        if(!await bcrypt.compare(password,user.password))
            return res.status(400).send({error: 'Invalid password!'});

        user.password = undefined;

        const token = jwt.sign({id: user.id}, authconfig.secret, {
            expiresIn: 86400,
        });
        
        res.send({user, token});
    }
    catch(error){
        return res.status(400).send({error: 'Warning: There was an error while logging in'});
    }
});

module.exports = controller;