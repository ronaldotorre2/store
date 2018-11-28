/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre 
 *-----------------------------------------------------------
 * Configuration..: Database
 * ---------------------------------------------------------*/

const mongoose    = require('mongoose');
const datatype    = "mongodb://";
const database    = "/storeapp";
const host        = ["localhost","ds119394.mlab.com:19394"];
const environment = host[1];
const mongoUri    = datatype+"@"+environment+database;

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
    family: 4,
    auth: {
        user: 'esys',
        password: 'gerente2016'
    }
}

mongoose.connect(mongoUri, options, function(error){
    var process = null;

    if(error)
        console.log("Ocurred error! "+error);
    else{
        if (environment == "localhost"){
            process = "Localhost";
        }
        else if(environment == "ds119394.mlab.com:19394"){
            process = "Developer in cloud";
        } 
    }
    
    console.log("Mongodb connected in the "+process+" environment ...");
});
mongoose.Promise = global.Promise;
mongoose.pluralize(null);

module.exports = mongoose;