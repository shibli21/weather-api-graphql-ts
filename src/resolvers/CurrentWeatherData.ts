import { WeatherData } from "../typeDefs/WeatherData";
import { config } from "dotenv";
import { Resolver, Query, Arg } from "type-graphql";
import "reflect-metadata";
import axios from "axios";
config();
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.KEY}`;

@Resolver()
export class CurrentWeatherData {
  @Query(() => WeatherData)
  async getCityByName(
    @Arg("city") city: string,
    @Arg("country", { nullable: true }) country: string
  ): Promise<WeatherData> {
    try {
      let url = `${WEATHER_API}&q=${city}`;
      if (country) url = url + `,${country}`;
      const { data } = await axios.get(url);
      return {
        id: data.id,
        city: data.name,
        country: data.sys.country,
        coordinates: {
          lat: data.coord.lon,
          lon: data.coord.lon,
        },
        lastUpdated: data.dt,
        temperature: {
          actual: data.main.temp,
          feelsLike: data.main.feels_like,
          min: data.main.temp_min,
          max: data.main.temp_max,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        },
        timezone: data.timezone,
        clouds: data.clouds.all,
        visibility: data.visibility,
        weather: {
          id: data.weather[0].id,
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
        wind: {
          deg: data.wind.deg,
          speed: data.wind.speed,
        },
      };
    } catch (err) {
      throw new Error("data not found");
    }
  }
}
