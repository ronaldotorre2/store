/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /userProfile
 * ---------------------------------------------------------*/

const express     = require('express');

const Profile     = require('./profileModel');

const controller  = express.Router();


controller.get('/list', async(req, res, next)=>{
    var profile = await Profile.find();
    
    if(profile == null || profile == undefined){
        return res.send(204).send({error: 'Not records of profile found!'});
    }
    else{
        return res.send({profile});
    }
});

controller.post('/register',async(req,res)=>{
    const { name } = req.body;

    try{
        if(await Profile.findOne({name}))
            return res.status(400).send({error: 'Profile already exists!'});

        const profile = await Profile.create(req.body);
        
        return res.send({profile});
    }
    catch(error){
        return res.status(400).send({error: 'Register profile failed'});
    }
});

module.exports = controller;