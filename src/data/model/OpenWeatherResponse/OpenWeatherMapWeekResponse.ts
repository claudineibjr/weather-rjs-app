import { WeatherInfo } from "../WeatherInfo";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export class OpenWeatherMapWeekResponse extends OpenWeatherMapBasicResponse {
    dailyWeatherInfo: Array<WeatherInfo>;

    constructor(dailyWeatherInfo: Array<WeatherInfo>, lat: number, lon: number, timezone: string, timezoneOffset: number) {
        super(lat, lon, timezone, timezoneOffset);
        this.dailyWeatherInfo = dailyWeatherInfo;
    }
}