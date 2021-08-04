export default class UserLocation {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static defaultUserLocation(): UserLocation {
        const oldTraffordStadiumLocation = new UserLocation(
            53.4597954,
            -2.2952338
        );

        return oldTraffordStadiumLocation;
    }
}