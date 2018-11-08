/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Configuration..: Database
 * ---------------------------------------------------------*/

const mongoose = require('mongoose');
const datatype = "mongodb://";
const database = "/storeapp";
const host = "localhost";

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
}

//mongoose.connect('mongodb://'+host+'/storeapp', { useMongoClient: true });
mongoose.connect(datatype+host+database, options, function(error){
    if(error)
        console.log("Ocurred error! "+error);
    else
        console.log("Mongodb connected in environment "+host+"...");
});
mongoose.Promise = global.Promise;
mongoose.pluralize(null);

module.exports = mongoose;