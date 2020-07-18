/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /category
 * ---------------------------------------------------------*/

const express     = require('express');

const Category    = require('./categoryModel');

const controller  = express.Router();


//Create a new category
controller.post('/create',async(req,res)=>{
    const { name } = req.body;

    try{
        if(await Category.findOne({name}))
            return res.status(400).send({error: 'Category already exists!'});

        const category = await Category.create(req.body);
        
        return res.send({category});
    }
    catch(error){
        return res.status(400).send({error: 'Register category failed'});
    }

});

//Get all categories
controller.get('/read', async(req, res, next)=>{
    var category = await Category.find();
    
    if(category == null || category == undefined){
        return res.status(204).send({error: 'Not records of category found!'});
    }
    else{
        return res.status(200).send({category});
    }

});

//Get a single category by id
controller.get('/find/:id', async(req, res)=>{
    var category = await Category.findById(req.params.id);
    
    if(category == null || category == undefined){
        return res.status(204).send({error: 'Not records of category found!'});
    }
    else{
        return res.status(200).send({category});
    }

});

// Update a category
controller.put('/update/:id', async(req, res)=>{
    var id = req.params.id;

    Category.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of category!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of category not found");
            }
            else{
                if(req.body.name){
                    data.name = req.body.name;
                }

                if(req.body.description){
                    data.description = req.body.description;
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

//Delete category by id
controller.delete('/delete/:id', async(req, res)=>{
    var id = req.params.id;

    Category.findOne({_id: id}, function (err, data){
        if(err){
            console.log(err);
            return res.status(500).send("Ocurred a error in delete of category!");
        }
        else{
            if(!data){
                res.status(404).send("Register of category not found");
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