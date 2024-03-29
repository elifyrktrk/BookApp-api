const mongoose = require("mongoose");

const schema = new mongoose.Schema({ 
    name: String, 
    author: String,
    publisher: String,
    cover: String,
    overview: String,
    language: String,
    createYear: Number,
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        }]
});

const Book = mongoose.model('Book', schema);
module.exports = Book;