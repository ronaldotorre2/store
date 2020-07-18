/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: Country
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const CountryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    initial: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    language: [{'name':String, 'initial':String}],
    money: {
        type: String,
        required: true
    },
    moneyInitial: {
        type:String,
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

const Country = mongoose.model('Country', CountryModel);

module.exports = Country;