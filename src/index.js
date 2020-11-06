const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw new Error(result.error);
}

const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
});

const app = express();
app.use(cors());

server.applyMiddleware({ app, cors: false });

const PORT = process.env.PORT || 5000;

app.listen({ port: PORT }, () => {
  console.log(
    `Server listening at http://localhost:${PORT}${server.graphqlPath}`
  );
});
