import { DailyWeatherInfo } from "../WeatherInfo/DailyWeatherInfo";
import { WeatherInfoMap } from "../WeatherInfo/response/WeatherInfoMap";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export class OpenWeatherMapDayResponse extends OpenWeatherMapBasicResponse {
    hourly: Array<WeatherInfoMap>;

    constructor(hourly: Array<WeatherInfoMap>, lat: number, lon: number, timezone: string, timezone_offset: number) {
        super(lat, lon, timezone, timezone_offset);
        this.hourly = hourly;
    }
}