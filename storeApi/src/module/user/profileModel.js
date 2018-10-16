/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: profile
 * ---------------------------------------------------------*/

const mongoose  = require('../../config/database');

const ProfileModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    initial:{
        type: String,
        maxlength: 5,
        required:true,
    },
    description:{
        type: String,
    },
    isactive:{
        type: Boolean,
        default: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const profile = mongoose.model('Profile', ProfileModel);

module.exports = profile;