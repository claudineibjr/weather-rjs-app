import { WeatherInfo } from "../WeatherInfo";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export class OpenWeatherMapDayResponse extends OpenWeatherMapBasicResponse {
    hourlyWeatherInfo: Array<WeatherInfo>;

    constructor(hourlyWeatherInfo: Array<WeatherInfo>, lat: number, lon: number, timezone: string, timezoneOffset: number) {
        super(lat, lon, timezone, timezoneOffset);
        this.hourlyWeatherInfo = hourlyWeatherInfo;
    }
}