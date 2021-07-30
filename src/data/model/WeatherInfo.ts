import { WeatherInfoEnum } from "./Weather";

export class WeatherInfo {
    date: Date;
    minTemperature: number;
    maxTemperature: number;
    wheaterInfo: WeatherInfoEnum;
    wheaterInfoIcon: string;

    constructor(date: Date, minTemperature: number, maxTemperature: number, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        this.date = date;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.wheaterInfo = wheaterInfo;
        this.wheaterInfoIcon = wheaterInfoIcon;
    }
}