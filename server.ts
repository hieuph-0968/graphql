import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./src/graphql/schema";
import { resolvers } from "./src/graphql/resolver";
import dotenv from "dotenv";
dotenv.config({ path: '/home/phan.hoang.hieu/Desktop/LEARN_NODEJS/GRAPHQL/.env' });
import { connectDB } from "./src/util/mongoose";

const app =  express();
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

connectDB()
startServer();

app.listen({port: 4000}, () => {
    console.log(`Server ready at: http://localhost:4000${apolloServer.graphqlPath}`);
})
