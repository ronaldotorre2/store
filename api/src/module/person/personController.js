/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /person
 * ---------------------------------------------------------*/

const express     = require('express');

const Person      = require('./personModel');

const controller  = express.Router();


//Create a new person
controller.post('/create',async(req,res)=>{
    const { document1 } = req.body;

    try{
        if(await Person.findOne({document1}))
            return res.status(400).send({error: 'Person already exists!'});

        const person = await Person.create(req.body);
        
        return res.send({person});
    }
    catch(error){
        return res.status(400).send({error: 'Register person failed'});
    }
});

//Get all people
controller.get('/read', async(req, res, next)=>{
    var person = await Person.find();
    
    if(person == null || person == undefined){
        return res.status(204).send({error: 'Not records of person found!'});
    }
    else{
        return res.status(200).send({person});
    }
});

//Get a single person by id
controller.get('/find/:id', async(req, res)=>{
    var person = await Person.findById(req.params.id);
    
    if(person == null || person == undefined){
        return res.status(204).send({error: 'Not records of person found!'});
    }
    else{
        return res.status(200).send({person});
    }
});

// Update a person
controller.put('/update/:id', async(req, res)=>{
    var id = req.params.id;

    Person.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of person!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of person not found");
            }
            else{
                if(req.body.name){
                    data.name = req.body.name;
                }

                if(req.body.gender){
                    data.gender = req.body.gender;
                }

                if(!req.body.socialname){
                    data.socialname = req.body.socialname;
                }

                if(!req.body.birthdate){
                    data.birthdate = req.body.birthdate;
                }

                if(!req.body.document1){
                    data.document1 = req.body.document1;
                }

                if(!req.body.document2){
                    data.document2 = req.body.document2;
                }

                if(!req.body.document3){
                    data.document3 = req.body.document3;
                }

                if(!req.body.statecivil){
                    data.statecivil = req.body.statecivil;
                }

                if(!req.body.spousename){
                    data.spousename = req.body.spousename;
                }

                if(!req.body.mothername){
                    data.mothername = req.body.mothername;
                }

                if(!req.body.fathername){
                    data.fathername = req.body.fathername;
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

//Delete person by id
controller.delete('/delete/:id', async(req, res)=>{
    var id = req.params.id;

    Person.findOne({_id: id}, function (err, data){
        if(err){
            console.log(err);
            return res.status(500).send("Ocurred a error in delete of person!");
        }
        else{
            if(!data){
                res.status(404).send("Register of person not found");
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