/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: user
 * ---------------------------------------------------------*/

const mongoose  = require('../../config/database');
const bcrypt    = require('bcryptjs'); 

const UserModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    mail:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

UserModel.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserModel);

module.exports = User;