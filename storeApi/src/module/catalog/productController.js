/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /product
 * ---------------------------------------------------------*/

const express     = require('express');

const Product     = require('./productModel');

const controller  = express.Router();


//Create a new product
controller.post('/create',async(req,res)=>{
    const {name} = req.body;

    try{
        if(await Product.findOne({name}))
            return res.status(400).send({error: 'Product already exists!'});

        const product = await Product.create(req.body);
        
        return res.send({product});
    }
    catch(error){
        return res.status(400).send({error: 'Register product failed'});
    }
    
});

//Get all products
controller.get('/read', async(req, res, next)=>{
    var product = await Product.find();
    
    if(product == null || product == undefined){
        return res.status(204).send({error: 'Not records of product found!'});
    }
    else{
        return res.status(200).send({product});
    }

});

//Get a single product by id
controller.get('/find/:id', async(req, res)=>{
    var product = await Product.findById(req.params.id);
    
    if(product == null || product == undefined){
        return res.status(204).send({error: 'Not records of product found!'});
    }
    else{
        return res.status(200).send({product});
    }
});

// Update a product by id
controller.put('/update/:id', async(req, res)=>{
    var id = req.params.id;

    Product.findOne({_id: id}, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send("Ocurred a error in update of product!!");
        }
        else{
            if(!data){
                res.status(404).send("Register of product not found");
            }
            else{
                if(req.body.name){
                    data.name = req.body.name;
                }

                if(req.body.description){
                    data.description = req.body.description;
                }

                if(req.body.codebar){
                    data.codebar = req.body.codebar;
                }

                if(req.body.codencm){
                    data.codencm = req.body.codencm;
                }

                if(req.body.unit){
                    data.unit = req.body.unit;
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

//Delete product by id
controller.delete('/delete/:id', async(req, res)=>{
    var id = req.params.id;

    Product.findOne({_id: id}, function (err, data){
        if(err){
            console.log(err);
            return res.status(500).send("Ocurred a error in delete of product!");
        }
        else{
            if(!data){
                res.status(404).send("Register of product not found");
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