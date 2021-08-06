import { Dispatch } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import { DailyWeatherInfo } from "../data/model/WeatherInfo/DailyWeatherInfo";
import { HourlyWeatherInfo } from "../data/model/WeatherInfo/HourlyWeatherInfo";
import { ActionType, DispatchAction } from "./root-reducer";

export class RootDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch;
    }

    updateUserLocation = (userLocation: UserLocation) => this.dispatch({
        type: ActionType.UpdateUserLocation,
        payload: {
            userLocation
        },
    });

    updateWeekWeatherInfos = (weekWeatherInfos: Array<DailyWeatherInfo>) => this.dispatch({
        type: ActionType.UpdateWeekWeatherInfos,
        payload: {
            weekWeatherInfos
        },
    });

    updateHourlyWeatherInfos = (hourlyWeatherInfos: Array<HourlyWeatherInfo>) => this.dispatch({
        type: ActionType.UpdateHourlyWeatherInfos,
        payload: {
            hourlyWeatherInfos
        },
    });

    setIsLoadingDetailedData = (isLoadingDetailedData: boolean) => this.dispatch({
        type: ActionType.SetIsLoadingDetailedData,
        payload: {
            isLoadingDetailedData
        },
    });
}