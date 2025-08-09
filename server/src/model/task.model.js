const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            'Provide a title'
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'Provide a description'
        ]
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Tasks', TaskSchema)