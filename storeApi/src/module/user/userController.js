/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /user
 * ---------------------------------------------------------*/

const express = require('express');
const controller = express.Router();

const User = require('./userModel');

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

        return res.send({user});
    }
    catch(error){
        return res.status(400).send({error: 'Register user failed'});
    }
});

module.exports = controller;