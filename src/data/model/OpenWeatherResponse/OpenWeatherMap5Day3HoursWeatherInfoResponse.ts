interface WeatherInfo5Days3HoursForecastMainMapInterface {
    temp: number,
}

export interface WeatherInfoMapResponseInterface {
    id: number,
    main: string,
    icon: string,
}

interface WeatherInfo5Days3HoursForecastMapInterface {
    dt: number,
    main: WeatherInfo5Days3HoursForecastMainMapInterface,
    weather: Array<WeatherInfoMapResponseInterface>,
}

interface WeatherInfoLocationCoordinatesMap {
    lat: number,
    lon: number
}

interface WeatherInfoCityMapInterface {
    name: string,
    coord: WeatherInfoLocationCoordinatesMap,
}

export default class OpenWeatherMap5Day3HoursWeatherInfoResponse {
    cod: string;
    list: Array<WeatherInfo5Days3HoursForecastMapInterface>;
    city: WeatherInfoCityMapInterface;

    constructor(cod: string, list: Array<WeatherInfo5Days3HoursForecastMapInterface>, city: WeatherInfoCityMapInterface) {
        this.cod = cod;
        this.list = list;
        this.city = city;
    }
}