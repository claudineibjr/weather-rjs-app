import { WeatherInfoMapInterface, WeatherInfoTemperatureMapResponseInterface } from "../OpenWeatherResponse/OpenWeatherMapWeekResponse";
import { WeatherInfo, WeatherInfoEnum } from "./WeatherInfo";

export class DailyWeatherInfo extends WeatherInfo {
    minTemperature: number;
    maxTemperature: number;

    constructor(date: Date, minTemperature: number, maxTemperature: number, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        super(date, wheaterInfo, wheaterInfoIcon);
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
    }

    static fromWeatherInfoMapInterface(weatherInfoMap?: WeatherInfoMapInterface): DailyWeatherInfo {
        try {
            if (weatherInfoMap === undefined) {
                throw new Error("weatherInfoMap == undefined");
            }

            const date = new Date(weatherInfoMap.dt * 1000);

            let minTemperature: number = (weatherInfoMap.temp as WeatherInfoTemperatureMapResponseInterface).min;
            let maxTemperature: number = (weatherInfoMap.temp as WeatherInfoTemperatureMapResponseInterface).max;

            let weatherInfoEnum: WeatherInfoEnum = WeatherInfoEnum.Clear;
            let weatherInfoIcon: string = '';

            const weatherInfo = weatherInfoMap.weather[0];
            weatherInfoIcon = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

            // Get the group of weather conditions
            switch ((weatherInfo.id / 100) | 0) {
                case 2: weatherInfoEnum = WeatherInfoEnum.Thunderstorm; break;
                case 3: weatherInfoEnum = WeatherInfoEnum.Drizzle; break;
                case 5: weatherInfoEnum = WeatherInfoEnum.Rain; break;
                case 6: weatherInfoEnum = WeatherInfoEnum.Snow; break;
                case 7: weatherInfoEnum = WeatherInfoEnum.Atmosphere; break;
                case 8:
                    if (weatherInfo.id === 800) {
                        weatherInfoEnum = WeatherInfoEnum.Clear;
                    } else {
                        weatherInfoEnum = WeatherInfoEnum.Clouds;
                    }
                    break;
            }

            return new DailyWeatherInfo(date, minTemperature, maxTemperature, weatherInfoEnum, weatherInfoIcon);
        } catch (_) {
            throw new Error("Error on converting");
        }
    }
}