import { getAllBooks, getBookById, createBook } from "../../service/bookService."
import { getAuthorById } from "../../service/authorSevice"

const bookResolvers = {
    //QUERY
    Query: {
        books: async () => await getAllBooks(),
        book: async (parent: any, args: any) => await getBookById(args.id),
    },

    Book: {
        author: async ({authorId}: any, args: any) => await getAuthorById(authorId),
    },

    // MUTATION
    Mutation: {
        createBook: async (parent: any, args: any) => createBook(args),
    }
}

export { bookResolvers }