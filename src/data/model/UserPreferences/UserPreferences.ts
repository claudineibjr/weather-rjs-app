import UserLocation from "./UserLocation";

export default class UserPreferences {
    userLocation: UserLocation;

    constructor(userLocation: UserLocation) {
        this.userLocation = userLocation;
    }
}