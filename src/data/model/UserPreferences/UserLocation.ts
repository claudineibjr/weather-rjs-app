export default class UserLocation {
    latitude: number;
    longitude: number;
    name?: string;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}