/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Controller.....: /authenticate
 * ---------------------------------------------------------*/

const express = require('express');
const controller = express.Router();

const User = require('../user/userModel');

controller.get('/', function (req, res, next) {
    res.status(200).send({
        title:"Autenticar"
    });
});


module.exports = controller;