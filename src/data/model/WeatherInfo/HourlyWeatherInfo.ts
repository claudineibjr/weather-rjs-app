import { WeatherInfo, WeatherInfoEnum } from "./WeatherInfo";

export class HourlyWeatherInfo extends WeatherInfo {
    temperature: number;

    constructor(date: Date, temperature: number, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        super(date, wheaterInfo, wheaterInfoIcon);
        this.temperature = temperature;
    }
}