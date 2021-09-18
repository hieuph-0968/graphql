import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AuthorSchema =  new Schema({
    name: String,
    age: Number
}, {
    collection: 'authors'
});

export const Author = mongoose.model('authors', AuthorSchema);
 
