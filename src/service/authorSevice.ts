import { findAllAuthors, findAuthorById, saveAuthor }  from "../store/authorStore"


const getAllAuthors = async () =>  await findAllAuthors();

const getAuthorById = async (authorId: String) => await findAuthorById(authorId);

const createAuthor = async (data: any) => await saveAuthor(data)

export { getAllAuthors, getAuthorById, createAuthor }