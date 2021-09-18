import { Book } from "../models/book";

const findAllBooks = async () => await Book.find();


const findBookById = async (bookId: String) => await Book.findById(bookId);

const findBooksByAuthorId = async (authorId: String) => await Book.find({authorId: authorId});

const saveBook = async (data: any) => {
    const book = new Book(data)
    return await book.save();
}

export { findAllBooks, findBookById, findBooksByAuthorId, saveBook }