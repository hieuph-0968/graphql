import { Author } from "../models/author";

const findAllAuthors = async () =>  await Author.find();

const findAuthorById = async (authorId: String) => await Author.findById(authorId);

const saveAuthor = async (data: any) => {
    const author = new Author(data)
    return await author.save();
}

export { findAllAuthors, findAuthorById, saveAuthor }