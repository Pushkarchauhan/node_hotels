const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
     
    name: {
        type: String,
        required: true
    },

    price: {
        type : Number,
        required: true
    },

    flavour: {
        type: String,
    },

    Spicy: {
        type: Boolean
    },

});

const menu = mongoose.model('menu',menuSchema);

module.exports = menu;