export class OpenWeatherMapBasicResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezoneOffset: number;

    constructor(lat: number, lon: number, timezone: string, timezoneOffset: number) {
        this.lat = lat;
        this.lon = lon;
        this.timezone = timezone;
        this.timezoneOffset = timezoneOffset;
    }
}