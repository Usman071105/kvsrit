const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['ug', 'pg']
    },
    name: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
});

// Text index for search
courseSchema.index({ name: 'text', fullName: 'text', type: 'text' });

module.exports = mongoose.model('Course', courseSchema);
