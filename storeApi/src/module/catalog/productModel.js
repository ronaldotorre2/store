/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: product
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const category = require('./categoryModel');

const ProductModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    codebar:{
        type: String,
        required: true,
    },
    codencm:{
        type: String,
    },
    category:{
        type: category.schema,
        required: true,
    },
    tags:[String],
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductModel);

module.exports = Product;