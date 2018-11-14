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


//Create a new profile
controller.post('/create',async(req,res)=>{
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

//Get all profiles
controller.get('/read', async(req, res, next)=>{
    var profile = await Profile.find();
    
    if(profile == null || profile == undefined){
        return res.send(204).send({error: 'Not records of profile found!'});
    }
    else{
         return res.status(200).send({profile});
    }
});

//Get a single profile for id
controller.get('/find/:id', async(req, res, next)=>{
    var profile = await Profile.findById(req.params.id);
    
    if(profile == null || profile == undefined){
        return res.send(204).send({error: 'Not records of profile found!'});
    }
    else{
        return res.status(200).send({profile});
    }
});

// Update a profile
controller.put('/update/:id', async(req, res)=>{
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, data) {
        if(err) 
            return res.status(404).send("There was a problem updating the profile.");
        
        return res.status(200).send(data);
    });
});

module.exports = controller;