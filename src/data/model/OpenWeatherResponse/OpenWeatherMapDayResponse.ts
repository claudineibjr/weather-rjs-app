import { WeatherInfo } from "../WeatherInfo/WeatherInfo";
import { WeatherInfoMap } from "../WeatherInfo/response/WeatherInfoMap";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export class OpenWeatherMapDayResponse extends OpenWeatherMapBasicResponse {
    hourlyWeatherInfo: Array<WeatherInfoMap>;

    constructor(hourlyWeatherInfo: Array<WeatherInfoMap>, lat: number, lon: number, timezone: string, timezoneOffset: number) {
        super(lat, lon, timezone, timezoneOffset);
        this.hourlyWeatherInfo = hourlyWeatherInfo;
    }
}