import { DailyWeatherInfo } from "../DailyWeatherInfo";
import { HourlyWeatherInfo } from "../HourlyWeatherInfo";
import { WeatherInfoEnum } from "../WeatherInfo";
import { WeatherInfoMapResponse } from "./WeatherInfoMapResponse";
import { WeatherInfoTemperatureMapResponse } from "./WeatherInfoTemperature";

export class WeatherInfoMap {
    dt: number;
    temp: WeatherInfoTemperatureMapResponse | number;
    // temp: WeatherInfoTemperatureMapResponse;
    weather: Array<WeatherInfoMapResponse>;

    constructor(dt: number, temp: WeatherInfoTemperatureMapResponse | number, temperature: number, weather: Array<WeatherInfoMapResponse>) {
        this.dt = dt;
        this.temp = temp;
        this.weather = weather;
    }

    static toDailyWeatherInfo(weatherInfoMap?: WeatherInfoMap): DailyWeatherInfo {
        try {
            if (weatherInfoMap === undefined) {
                throw new Error("weatherInfoMap == undefined");
            }

            const date = new Date(weatherInfoMap.dt * 1000);

            let minTemperature: number = (weatherInfoMap.temp as WeatherInfoTemperatureMapResponse).min;
            let maxTemperature: number = (weatherInfoMap.temp as WeatherInfoTemperatureMapResponse).max;

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

    static toHourlyWeatherInfo(weatherInfoMap?: WeatherInfoMap): HourlyWeatherInfo {
        try {
            if (weatherInfoMap === undefined) {
                throw new Error("weatherInfoMap == undefined");
            }

            const date = new Date(weatherInfoMap.dt * 1000);

            let temperature: number = (weatherInfoMap.temp as number);

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

            return new HourlyWeatherInfo(date, temperature, weatherInfoEnum, weatherInfoIcon);
        } catch (_) {
            throw new Error("Error on converting");
        }
    }    
}