/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: State
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const country = require('./countryModel');

const StateModel = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    initial: {
        type: String,
        required: true
    },
    country: {
        type: country,
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

const State = mongoose.model('State', StateModel);

module.exports = State;