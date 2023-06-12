const { ApolloServer } = require("@apollo/server");
require("dotenv").config();
const fetch = require("node-fetch");
const { startStandaloneServer } = require("@apollo/server/standalone");

const fastify = require("fastify");
const taxes = require("../tools/taxes.json");
const countriesTaxes = require("../tools/countries-taxes.json");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

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

app.get("/api/get-currency", async (_, reply) => {
  const currency = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=6T1IlLeW1UQm2i1dkCilsAby55Fu0xPwYB9bMmhv&currencies=EUR%2CGBP%2CAUD&base_currency=RUB`,
    {
      method: "GET",
    }
  );
  const currencyFetched = await currency.json();
  const objCurrency = Object.entries(currencyFetched.data).map(([key,value]) => {
    return {
      name: key,
      value,
    };
  });
  reply.send(objCurrency);
});

app.get("/api/get-taxes", (_, reply) => {
  reply.send(taxes);
});

app.get("/api/get-countries-taxes", (_, reply) => {
  reply.send(countriesTaxes);
});

app.get("/api/get-taxes/:countryId", (request, reply) => {
  const { countryId } = request.params;
  const countryData = taxes.find((x) => `${x.id}` === countryId);
  reply.send(countryData);
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
