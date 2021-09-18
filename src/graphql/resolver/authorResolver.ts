import { getAllAuthors, getAuthorById, createAuthor }  from "../../service/authorSevice"
import { getBooksByAuthorId }  from "../../service/bookService."

const authorResolvers = {
    //QUERY
    Query: {
        authors: async () =>  await getAllAuthors(),
        author: async (parent: any, args: any) => getAuthorById(args.id),
    },

    Author: {
        books: async ({id}: any, args: any) => getBooksByAuthorId(id),
    },
    // MUTATION
    Mutation: {
        createAuthor: async (parent: any, args: any) => await createAuthor(args),
    }
}

export { authorResolvers }