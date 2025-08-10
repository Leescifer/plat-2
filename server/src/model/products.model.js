const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [
            true,
            'Provide product name'
        ],
        trim: true
    },
    manufacturer: {
        type: String,
        required: [
            true,
            'Provide Manufacturer'
        ],
        trim: true

    },
    price: {
        type: Number,
        required: [
            true,
            'Provide Price'
        ]
    }
}, { timestamps: true })

module.exports = mongoose.model('Products', ProductSchema);