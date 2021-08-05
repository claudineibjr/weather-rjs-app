import { WeatherInfoMapResponseInterface } from "./OpenWeatherMap5Day3HoursWeatherInfoResponse";
import { OpenWeatherMapBasicResponse } from "./OpenWeatherMapBasicResponse";

export interface WeatherInfoTemperatureMapResponseInterface {
    min: number,
    max: number
}

export interface WeatherInfoMapInterface {
    dt: number;
    temp: WeatherInfoTemperatureMapResponseInterface | number;
    weather: Array<WeatherInfoMapResponseInterface>;
}

export class OpenWeatherMapWeekResponse extends OpenWeatherMapBasicResponse {
    daily: Array<WeatherInfoMapInterface>;

    constructor(dailyWeatherInfo: Array<WeatherInfoMapInterface>, lat: number, lon: number, timezone: string, timezone_offset: number) {
        super(lat, lon, timezone, timezone_offset);
        this.daily = dailyWeatherInfo;
    }
}