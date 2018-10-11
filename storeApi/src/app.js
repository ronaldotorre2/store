/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * App control express
 * Run npm start
 * ---------------------------------------------------------*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Controllers
const indexController   = require('./module/home/indexController');
const userController    = require('./module/user/userController'); 
const authController    = require('./module/authenticate/authController');
const productController = require('./module/product/productController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexController);
app.use('/user',userController);
app.use('/auth',authController);
app.use('/product', productController);
module.exports = app;