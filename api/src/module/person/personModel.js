/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: Person
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const PersonModel = new mongoose.Schema({
    type:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    gender:{
        type: Number
    },
    socialname:{
        type: String
    },
    birthdate:{
        type: Date,
        required: true
    },
    document1: {
        type: String,
        required: true
    },
    document2: {
        type: String
    },
    document3: {
        type: String
    },
    statecivil:{
        type: Number
    },
    spousename: {
        type: String
    },
    mothername: {
        type: String
    },
    fathername: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updateAt:{
        type: Date
    }
});

const Person = mongoose.model('Person', PersonModel);

module.exports = Person;