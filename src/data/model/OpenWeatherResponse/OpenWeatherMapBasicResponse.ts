export class OpenWeatherMapBasicResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;

    constructor(lat: number, lon: number, timezone: string, timezone_offset: number) {
        this.lat = lat;
        this.lon = lon;
        this.timezone = timezone;
        this.timezone_offset = timezone_offset;
    }
}