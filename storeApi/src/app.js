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
const indexController    = require('./module/home/indexController');
const profileController  = require('./module/user/profileController');
const userController     = require('./module/user/userController'); 
const authController     = require('./module/authenticate/authController');
const categoryController = require('./module/catalog/categoryController'); 
const productController  = require('./module/catalog/productController');
const personController   = require('./module/person/personController');
const countryController  = require('./module/address/countryController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexController);
app.use('/userprofile', profileController)
app.use('/user',userController);
app.use('/auth',authController);
app.use('/category',categoryController);
app.use('/product', productController);
app.use('/person',personController);
app.use('/address/country', countryController);

module.exports = app;