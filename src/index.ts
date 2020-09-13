import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { CurrentWeatherData } from "./resolvers/getCityByName";

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CurrentWeatherData],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app, cors: true });

  app.listen(4001, () => {
    console.log("[server started at] : http://localhost:4001/graphql");
  });
};

main().catch(() => console.error());
