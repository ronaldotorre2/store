/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /user
 * ---------------------------------------------------------*/

const express    = require('express');
const jwt        = require('jsonwebtoken');

const authconfig = require('../../config/auth');

const User       = require('./userModel');

const controller = express.Router();


//Create a new user
controller.post('/create',async(req,res)=>{
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

//Get all users
controller.get('/read', async(req,res)=>{
    var user = await User.find();
    
    if(user == null || user == undefined){
        return res.status(204).send({error: 'Not records of user found!'});
    }
    else{
        return res.status(200).send({user});
    }
});

//Get a single User by id
controller.get('/find/:id', async(req, res)=>{
    var user = await User.findById(req.params.id);
    
    if(user == null || user == undefined){
        return res.status(204).send({error: 'Not records of user found!'});
    }
    else{
        return res.status(200).send({user});
    }
});

// Update a user
controller.put('/update/:id', async(req, res)=>{
    var id = req.params.id;

    User.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of user!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of user not found");
            }
            else{
                if(req.body.name){
                    data.name = req.body.name;
                }

                if(req.body.login){
                    data.login = req.body.login;
                }

                if(req.body.mail){
                    data.mail = req.body.mail;
                }

                if(req.body.password){
                    data.password = req.body.password;
                }

                if(req.body.remember){
                    data.remember = req.body.remember;
                }

                if(!req.body.updateAt){
                    data.updateAt = Date.now();
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

//Delete user by id
controller.delete('/delete/:id', async(req, res)=>{
    var id = req.params.id;

    User.findOne({_id: id}, function (err, data){
        if(err){
            console.log(err);
            return res.status(500).send("Ocurred a error in delete of user!");
        }
        else{
            if(!data){
                res.status(404).send("Register of user not found");
            }
            else{
                data.remove(function(err,object){
                    if(err){
                        console.log(err);
                        res.status(500).send();
                    }
                    else{
                        res.send(object);
                    }
                });
            }
        }
    });

});

module.exports = controller;