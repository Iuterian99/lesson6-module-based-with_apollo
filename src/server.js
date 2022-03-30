const http = require("http");
const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server-express");
const PORT = process.env.PORT || 4000;
const modules = require("./modules");
const server = new ApolloServer({
  modules,
});

const httpServer = http.createServer(app);
server.applyMiddleware({ app });

httpServer.listen({ port: PORT }, () => {
  console.log(PORT + server.graphqlPath);
});
