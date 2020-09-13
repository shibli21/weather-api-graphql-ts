import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Coordinates {
  @Field()
  lon: number;

  @Field()
  lat: number;
}
@ObjectType()
class Temperature {
  @Field()
  actual: number;

  @Field()
  feelsLike: number;

  @Field()
  min: number;

  @Field()
  max: number;

  @Field()
  pressure: number;

  @Field()
  humidity: number;
}
@ObjectType()
class Wind {
  @Field()
  speed: number;
  @Field()
  deg: number;
}

@ObjectType()
class Weather {
  @Field()
  id: number;

  @Field()
  main: string;

  @Field()
  description: string;

  @Field()
  icon: string;
}

@ObjectType()
export class WeatherData {
  @Field()
  id: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  coordinates: Coordinates;

  @Field()
  weather: Weather;

  @Field()
  temperature: Temperature;

  @Field()
  wind: Wind;

  @Field()
  visibility: number;

  @Field()
  clouds: number;

  @Field()
  lastUpdated: number;

  @Field()
  timezone: number;
}
