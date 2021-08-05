import UserLocation from "../data/model/UserPreferences/UserLocation";
import { DailyWeatherInfo } from "../data/model/WeatherInfo/DailyWeatherInfo";
import { HourlyWeatherInfo } from "../data/model/WeatherInfo/HourlyWeatherInfo";

import { load5Days3HoursForecastWeatherInfo, loadWeekWeatherInfo } from "../services/OpenWeatherMapApi";
import { DateUtilities } from "./dateUtils";

export class WeatherDataUtilities {
    static async fetchMyAPI(
        setIsLoadingDetailedDataFunction: (isLoadingDetailedData: boolean) => void,
        updateHourlyWeatherInfosFunction: (hourlyWeatherInfos: Array<HourlyWeatherInfo>) => void,
        updateUserLocationFunction: (userLocation: UserLocation) => void,
        updateWeekWeatherInfosFunction: (weekWeatherInfos: Array<DailyWeatherInfo>) => void,
        userLocation?: UserLocation, hourlyWeatherInfos?: Array<HourlyWeatherInfo>, weekWeatherInfos?: Array<DailyWeatherInfo>,
    ) {
        if (userLocation !== undefined) {
            // Load Hourly Data
            if (hourlyWeatherInfos === undefined) {
                setIsLoadingDetailedDataFunction(true);
                load5Days3HoursForecastWeatherInfo(userLocation!.latitude, userLocation!.longitude).then((hourlyWeatherInfo) => {
                    if (hourlyWeatherInfo !== undefined) {
                        let hourWeatherInfos = hourlyWeatherInfo.list.map((hourlyWeatherInfoMap, _) => HourlyWeatherInfo.fromWeatherInfo5Days3HoursForecastMapInterface(hourlyWeatherInfoMap));
                        hourWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());

                        updateHourlyWeatherInfosFunction(hourWeatherInfos);
                        setIsLoadingDetailedDataFunction(false);

                        let userLocation = new UserLocation(hourlyWeatherInfo.city.coord.lat, hourlyWeatherInfo.city.coord.lon);
                        userLocation.name = hourlyWeatherInfo.city.name;
                        updateUserLocationFunction(userLocation);
                    }
                });
            }

            // Load Week data
            if (weekWeatherInfos === undefined) {
                const weekWeatherInfo = await loadWeekWeatherInfo(userLocation!.latitude, userLocation!.longitude);
                if (weekWeatherInfo !== undefined) {
                    let weekWeatherInfos = weekWeatherInfo.daily.map((weatherInfoMap, _) => DailyWeatherInfo.fromWeatherInfoMapInterface(weatherInfoMap));
                    weekWeatherInfos.sort((weatherInfoA, weatherInfoB) => weatherInfoA.date.getTime() - weatherInfoB.date.getTime());
                    weekWeatherInfos = weekWeatherInfos.filter((weatherInfo) => DateUtilities.dateIsAfterToday(weatherInfo.date));

                    if (weekWeatherInfos.length > 5) {
                        weekWeatherInfos = weekWeatherInfos.slice(0, 5);
                    }

                    updateWeekWeatherInfosFunction(weekWeatherInfos);
                }
            }
        }
    }
}