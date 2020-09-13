import { Resolver, Query } from "type-graphql";
import "reflect-metadata";

// const url = "";

@Resolver()
export class CurrentWeatherData {
  @Query(() => String)
  getCityByName() {
    return "hello ";
  }
}
