/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /product
 * ---------------------------------------------------------*/

const express     = require('express');
const controller  = express.Router();

const Product = require('./productModel');

controller.get('/', function (req, res, next) {
    res.status(200).send({
        title:"produto"
    });
});

module.exports = controller;