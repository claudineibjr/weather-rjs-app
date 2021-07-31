import { WeatherInfoMap } from "../WeatherInfo/response/WeatherInfoMap";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export class OpenWeatherMapWeekResponse extends OpenWeatherMapBasicResponse {
    daily: Array<WeatherInfoMap>;

    constructor(dailyWeatherInfo: Array<WeatherInfoMap>, lat: number, lon: number, timezone: string, timezone_offset: number) {
        super(lat, lon, timezone, timezone_offset);
        this.daily = dailyWeatherInfo;
    }
}