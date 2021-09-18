import { gql } from "apollo-server-express";

const authorTypeDefs = gql`
    type Author {
        id: ID
        name: String
        age: Int
        books: [Book]
    }
    
    # ROOT TYPE
    type Query {
        authors: [Author]
        author (id: ID!): Author
    }

    # ROOT MUTATION
    type Mutation {
        createAuthor(name: String, age: Int): Author
    }
`

export { authorTypeDefs };