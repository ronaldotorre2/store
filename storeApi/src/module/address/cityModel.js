/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: City
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const state = require('./stateModel');

const CityModel = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: state,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updateAt:{
        type: Date,
    }
});

const City = mongoose.model('City', CityModel);

module.exports = City;