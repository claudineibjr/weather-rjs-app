import { WeatherInfo, WeatherInfoEnum } from "./WeatherInfo";

export class DailyWeatherInfo extends WeatherInfo {
    minTemperature: number;
    maxTemperature: number;

    constructor(date: Date, minTemperature: number, maxTemperature: number, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        super(date, wheaterInfo, wheaterInfoIcon);
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
    }
}