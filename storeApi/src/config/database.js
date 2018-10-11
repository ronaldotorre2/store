/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Configuration..: Database
 * ---------------------------------------------------------*/

const mongoose = require('mongoose');
const host = "localhost";

mongoose.connect('mongodb://'+host+'/storeapp',{useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;