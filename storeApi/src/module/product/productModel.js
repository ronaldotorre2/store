/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: product
 * ---------------------------------------------------------*/

// class Product {
//     constructor(id, name, description, codebar) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.codebar = codebar;
//     }
// }

var Product = function(id,name,description,codebar,codencm,category={id,name}) {
    this.id = id,
    this.name = name;
    this.description = description;
    this.codebar = codebar;
    this.codencm = codencm
    this.category = category
};

module.exports = Product;