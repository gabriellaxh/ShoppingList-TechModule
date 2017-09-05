const mongoose = require('mongoose');

let productSchema = mongoose.Schema({

    priority: {type: String, required: true},
    name: {type: String, required: true},
    quantity: {type: String, required: true},
    status: {type: String, required:true}

});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;