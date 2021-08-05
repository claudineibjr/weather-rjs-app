import UserLocation from "../data/model/UserPreferences/UserLocation";

export class LocationUtilities {
    static loadUserLocationIfNeeded(userLocation: UserLocation | undefined, updateUserLocationFunction: (userLocation: UserLocation) => void): Promise<void> {
        return new Promise<void>(async (resolve, _) => {           
            if (userLocation !== undefined) {
                resolve();
            }

            try {
                let userLocation = await LocationUtilities.loadCurrentUserLocation();
                updateUserLocationFunction(userLocation);
            } catch (_) {
            } finally {
                resolve();
            }
        });
    }

    static loadCurrentUserLocation(): Promise<UserLocation> {
        return new Promise<UserLocation>((resolve, reject) => {
            try {
                if ("geolocation" in navigator) {
                    const successCallback = ((location: GeolocationPosition) => {
                        const userLocation = new UserLocation(location.coords.latitude, location.coords.longitude);
                        resolve(userLocation);
                    });

                    const errorCallback = (() => {
                        reject('Geolocation is unavailable');
                    });

                    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
                } else {
                    reject('Geolocation is unavailable');
                }
            } catch (_) {
                reject(`Error on get user location - ${_}`);
            }
        });
    }
}