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



module.exports = controller;