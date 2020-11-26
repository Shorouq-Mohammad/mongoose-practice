const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number
})

const Book = mongoose.model("book", personSchema)
module.exports = Book
