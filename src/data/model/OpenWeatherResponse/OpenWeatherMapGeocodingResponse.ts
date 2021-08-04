export class OpenWeatherMapGeocodingResponse {
    name: string;
    country: string;
    lat: number;
    lon: number;

    constructor(name: string, country: string, lat: number, lon: number) {
        this.name = name;
        this.country = country;
        this.lat = lat;
        this.lon = lon;
    }
}