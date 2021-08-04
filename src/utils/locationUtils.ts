import UserLocation from "../data/model/UserPreferences/UserLocation";

export class LocationUtilities {
    static loadCurrentUserLocation(): Promise<void> {
        return new Promise<void>(async (resolve, _) => {            
            let userLocation: UserLocation;
            
            try {
                userLocation = await LocationUtilities.loadCurrentUserGeolocation();
                resolve();
            } catch(_) {
                userLocation = UserLocation.defaultUserLocation();
                resolve();
            }
        });
    }
    
    private static loadCurrentUserGeolocation(): Promise<UserLocation> {
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