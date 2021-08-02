export enum WeatherInfoEnum {
    Thunderstorm,
    Drizzle,
    Rain,
    Snow,
    Atmosphere,
    Clear,
    Clouds,
}

export class WeatherInfo {
    date: Date;
    wheaterInfo: WeatherInfoEnum;
    wheaterInfoIcon: string;

    constructor(date: Date, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        this.date = date;
        this.wheaterInfo = wheaterInfo;
        this.wheaterInfoIcon = wheaterInfoIcon;
    }
}