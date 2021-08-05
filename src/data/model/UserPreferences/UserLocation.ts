export default class UserLocation {
    latitude: number;
    longitude: number;
    name?: string;

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

        return oldTraffordStadiumLocation;
    }
}