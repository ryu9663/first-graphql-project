import { GraphQLServer } from "graphql-yoga";
import { champion } from "./src/database/db";

const resolvers = {
  Query: {
    players: () => champion,
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL Server is running"));
