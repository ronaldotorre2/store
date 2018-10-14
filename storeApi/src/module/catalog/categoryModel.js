/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: category
 * ---------------------------------------------------------*/

const mongoose = require('../../config/database');

const CategoryModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Category = mongoose.model('Category', CategoryModel);

module.exports = Category;