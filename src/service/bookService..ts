import { findAllBooks, findBookById, findBooksByAuthorId, saveBook } from "../store/bookStore"

const getAllBooks = async () => await findAllBooks();

const getBookById = async (bookId: String) => await findBookById(bookId);

const getBooksByAuthorId = async (authorId: String) => await findBooksByAuthorId(authorId);

const createBook = async (data: any) => await saveBook(data);

export { getAllBooks, getBookById, getBooksByAuthorId, createBook }