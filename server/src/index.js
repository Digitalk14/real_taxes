const { ApolloServer } = require("@apollo/server");
require("dotenv").config();
const { startStandaloneServer } = require("@apollo/server/standalone");

const fastify = require("fastify");
const taxes = require("../tools/taxes.json");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// const express = require("express");
// const graphqlHTTP = require("graphql-http/lib/use/express");
// const app = express();

// const schema = require("./schema-mongodb");

const app = fastify({ logger: true });

app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("fastify start on 5000");
});

const start = async () => {
  try {
    await app.listen(5000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

app.get("/api/get-taxes", (_, reply) => {
  reply.send(taxes);
});

app.get("/api/get-taxes/:countryId", (request, reply) => {
  const { countryId } = request.params;
  const countryData = taxes.find((x) => `${x.id}` === countryId);
  console.log(countryData);
  reply.send(countryData)
});

const TrackAPI = require("./datasources/track-api");

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });

  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

startApolloServer();
