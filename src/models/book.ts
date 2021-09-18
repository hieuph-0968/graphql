import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema =  new Schema({
    name: String,
    genre: String,
    authorId: String
}, {
    collection: 'books'
});

export const Book = mongoose.model('books', BookSchema);