/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * App control express
 * Run npm start
 * ---------------------------------------------------------*/

const express = require('express');
const app = express();

//Controllers
const indexController = require('./module/home/indexController');
const productController = require('./module/product/productController');

app.use('/', indexController);
app.use('/product', productController);
module.exports = app;