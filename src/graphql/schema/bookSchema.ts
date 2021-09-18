import { gql } from "apollo-server-express";

const bookTypeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }
    
    # ROOT TYPE
    type Query {
        books: [Book]
        book (id: ID!): Book
    }

    # ROOT MUTATION
    type Mutation {
        createBook(name: String, genre: String, authorId: ID): Book
    }
`

export { bookTypeDefs };