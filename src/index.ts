import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { CurrentWeatherData } from "./resolvers/CurrentWeatherData";

const main = async () => {
  config();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CurrentWeatherData],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app, cors: true });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`[server started at] : http://localhost:${port}/graphql`);
  });
};

main().catch(() => console.error());
