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


controller.get('/list', async(req, res, next)=>{
    var product = await Product.find();
    
    if(product == null || product == undefined){
        return res.send(204).send({error: 'Not records of product found!'});
    }
    else{
        return res.send({product});
    }
});

controller.post('/register',async(req,res)=>{
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

module.exports = controller;