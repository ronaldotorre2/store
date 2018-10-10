/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /product
 * ---------------------------------------------------------*/

const express = require('express');
const controller = express.Router();

const Product = require('./productModel');

var products = [];
var p = new Product();
p.id = 1;
p.name = "Notebook Samsung Expert X22";
p.description = null;
p.codebar = null;
p.codencm = null;
p.category.id = 1;
p.category.name = "Informática";

products.push(p);

controller.get('/', function (req, res, next) {
    res.status(200).send({
        products
    });
});

module.exports = controller;