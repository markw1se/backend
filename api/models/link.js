const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    // TODO: change type using reference
    _id: mongoose.Schema.Types.ObjectId,
    link: { type: String, required: true }, // "link" field as a string
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: false }, // "category" field as a reference to the "categories" collection
    category: { type: mongoose.Schema.Types.ObjectId, required: false }, 
});

module.exports = mongoose.model('Link', linkSchema);