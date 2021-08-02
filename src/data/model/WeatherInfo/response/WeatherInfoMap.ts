import { WeatherInfo, WeatherInfoEnum } from "../WeatherInfo";
import { WeatherInfoMapResponse } from "./WeatherInfoMapResponse";
import { WeatherInfoTemperatureMapResponse } from "./WeatherInfoTemperature";

export class WeatherInfoMap {
    dt: number;
    temp: WeatherInfoTemperatureMapResponse;
    weather: Array<WeatherInfoMapResponse>;

    constructor(dt: number, temp: WeatherInfoTemperatureMapResponse, weather: Array<WeatherInfoMapResponse>) {
        this.dt = dt;
        this.temp = temp;
        this.weather = weather;
    }

    static toWeatherInfo(weatherInfoMap?: WeatherInfoMap): WeatherInfo {
        try {
        if (weatherInfoMap === undefined) {
            throw new Error("weatherInfoMap == undefined");
        }

        const date = new Date(weatherInfoMap.dt);
        
        let minTemperature: number = weatherInfoMap.temp.min;
        let maxTemperature: number = weatherInfoMap.temp.max;
        
        let weatherInfoEnum: WeatherInfoEnum = WeatherInfoEnum.Clear;
        let weatherInfoIcon: string = '';

        const weatherInfo = weatherInfoMap.weather[0];
        weatherInfoIcon = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
        
        // Get the group of weather conditions
        switch((weatherInfo.id / 100) | 0) {
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
    
        return new WeatherInfo(date, minTemperature, maxTemperature, weatherInfoEnum, weatherInfoIcon);
        } catch {
            throw new Error("Error on converting");
        }
    }       
}