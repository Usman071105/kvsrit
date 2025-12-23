const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        default: 0
    }
});

// Text index for search
recruiterSchema.index({ name: 'text' });

module.exports = mongoose.model('Recruiter', recruiterSchema);
