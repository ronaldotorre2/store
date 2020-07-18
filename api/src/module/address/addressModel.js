/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: Address
 * ---------------------------------------------------------*/
 
const mongoose = require('../../config/database');

const city = require('./cityModel');

const AddressModel = new mongoose.Schema({
    type:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    complement:{
        type: String
    },
    city: {
        type: city,
        required: true
    },
    ZipeCode: {
        type: String,
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

const Address = mongoose.model('Address', AddressModel);

module.exports = Address;