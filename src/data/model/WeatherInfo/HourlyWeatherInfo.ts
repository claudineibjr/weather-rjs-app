import { WeatherInfo5Days3HoursForecastMapInterface } from "../OpenWeatherResponse/OpenWeatherMap5Day3HoursWeatherInfoResponse";
import { WeatherInfo, WeatherInfoEnum } from "./WeatherInfo";

export class HourlyWeatherInfo extends WeatherInfo {
    temperature: number;

    constructor(date: Date, temperature: number, wheaterInfo: WeatherInfoEnum, wheaterInfoIcon: string) {
        super(date, wheaterInfo, wheaterInfoIcon);
        this.temperature = temperature;
    }

    static fromWeatherInfo5Days3HoursForecastMapInterface(weatherInfo5Days3HoursForecastMapInterface?: WeatherInfo5Days3HoursForecastMapInterface): HourlyWeatherInfo {
        try {
            if (weatherInfo5Days3HoursForecastMapInterface === undefined) {
                throw new Error("weatherInfoMap == undefined");
            }

            const date = new Date(weatherInfo5Days3HoursForecastMapInterface.dt * 1000);

            let temperature: number = weatherInfo5Days3HoursForecastMapInterface.main.temp;

            let weatherInfoEnum: WeatherInfoEnum = WeatherInfoEnum.Clear;
            let weatherInfoIcon: string = '';

            const weatherInfo = weatherInfo5Days3HoursForecastMapInterface.weather[0];
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

            return new HourlyWeatherInfo(date, temperature, weatherInfoEnum, weatherInfoIcon);
        } catch (_) {
            throw new Error("Error on parse");
        }
    }
}