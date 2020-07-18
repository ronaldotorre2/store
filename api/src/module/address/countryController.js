/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /address/country
 * ---------------------------------------------------------*/

const express       = require('express');

const countryModel  = require('./countryModel');

const controller    = express.Router();


//Create a new country
controller.post('/create',async(req,res)=> {
    const { name } = req.body;

    try{
        if(await countryModel.findOne({name}))
            return res.status(400).send({error: 'Country already exists!'});

        const country = await countryModel.create(req.body);
        
        return res.send({country});
    }
    catch(error){
        return res.status(400).send({error: 'Register country failed'});
    }
});

//Get all countries
controller.get('/read', async(req, res, next)=>{
    var country = await countryModel.find();
    
    if(country == null || country == undefined){
        return res.status(204).send({error: 'Not records of contry found!'});
    }
    else{
        return res.status(200).send({country});
    }
});


//Get a single country by id
controller.get('/find/:id', async(req, res)=>{
    console.log(req.params.id);
    var country = await countryModel.findById(req.params.id);
    
    if(country == null || country == undefined){
        return res.status(204).send({error: 'Not records of country found!'});
    }
    else{
        return res.status(200).send({country});
    }
});

controller.get('/findname/:name', async(req, res)=>{
    var country = await countryModel.find({'name': '/'+req.params.name+'/$'});
    
    if(country == null || country == undefined){
        return res.status(204).send({error: 'Not records of country found!'});
    }
    else{
        return res.status(200).send({country});
    }
});

// Update a country
controller.put('/update/:id', async(req, res)=>{
    var id = req.params.id;

    countryModel.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of country!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of country not found");
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

                if(req.body.language){
                    data.language = req.body.language;
                }

                if(req.body.money){
                    data.money = req.body.money;
                }

                if(req.body.moneyInitial){
                    data.moneyInitial = req.body.moneyInitial;
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

//Delete country by id
controller.delete('/delete/:id', async(req, res)=>{
    var id = req.params.id;

    countryModel.findOne({_id: id}, function (err, data){
        if(err){
            console.log(err);
            return res.status(500).send("Ocurred a error in delete of country!");
        }
        else{
            if(!data){
                res.status(404).send("Register of country not found");
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