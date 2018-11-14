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

//Get a single profile by id
controller.get('/find/:id', async(req, res, next)=>{
    var profile = await Profile.findById(req.params.id);
    
    if(profile == null || profile == undefined){
        return res.status(204).send({error: 'Not records of profile found!'});
    }
    else{
        return res.status(200).send({profile});
    }
});

// Update a profile
controller.put('/update/:id', async(req, res)=>{
    
    var id = req.params.id;

    Profile.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of user profile!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of user profile not found");
            }
            else{
                if(req.body.name){
                    data.name = req.body.name;
                }

                if(req.body.initial){
                    data.initial = req.body.initial;
                }

                if(req.body.description){
                    data.description = req.body.description;
                }

                if(req.body.isactive){
                    data.isactive = req.body.isactive;
                }

                data.save(function(err,updateObject){
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    }
                    else{
                        res.send(updateObject);
                    }
                });
            }
        }
    });

});

module.exports = controller;