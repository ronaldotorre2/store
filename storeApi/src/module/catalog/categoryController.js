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


controller.get('/', function (req, res, next) {
    const cat = Category.find();
    if(cat!= null && cat!= undefined){
        res.status(200).send({cat});
    }
    else{
        res.status(204).send({});
    }
});

controller.post('/register',async(req,res)=>{
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

module.exports = controller;