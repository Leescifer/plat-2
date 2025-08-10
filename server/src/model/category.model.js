const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [
            true,
            'Provide category name'
        ],
        trim: true
    },
    color: {
        type: String,
        required: [
            true,
            'Provide a Color'
        ]
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);