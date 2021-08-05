// import { OpenWeatherMapGeocodingResponse } from "../OpenWeatherResponse/OpenWeatherMapGeocodingResponse";

export default class UserLocation {
    latitude: number;
    longitude: number;
    name?: string;
    country?: string;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static defaultUserLocation(): UserLocation {
        const oldTraffordStadiumLocation = new UserLocation(
            53.4597954,
            -2.2952338
        );
        oldTraffordStadiumLocation.name = "Trafford Park";
        oldTraffordStadiumLocation.country = "GB";

        return oldTraffordStadiumLocation;
    }

    // static userLocationFromResponse(openWeatherMapGeocodingResponse?: OpenWeatherMapGeocodingResponse): UserLocation {
    //     if (openWeatherMapGeocodingResponse === undefined) {
    //         throw new Error('Error on parsing');
    //     }

    //     const userLocation: UserLocation = new UserLocation(
    //         openWeatherMapGeocodingResponse.lat,
    //         openWeatherMapGeocodingResponse.lon
    //     );
    //     userLocation.name = openWeatherMapGeocodingResponse.name;
    //     userLocation.country = openWeatherMapGeocodingResponse.country;

    //     return userLocation;
    // }
}