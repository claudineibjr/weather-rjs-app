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

    whaterInfoText = (): string => {
        switch (this.wheaterInfo) {
            case WeatherInfoEnum.Thunderstorm: return 'Thunderstorm';
            case WeatherInfoEnum.Drizzle: return 'Drizzle';
            case WeatherInfoEnum.Rain: return 'Rain';
            case WeatherInfoEnum.Snow: return 'Snow';
            case WeatherInfoEnum.Atmosphere: return 'Atmosphere';
            case WeatherInfoEnum.Clear: return 'Clear';
            case WeatherInfoEnum.Clouds: return 'Clouds';

            default:
                return '';
        }
    }
}