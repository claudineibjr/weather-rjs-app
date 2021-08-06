import { Action, Reducer } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import { DailyWeatherInfo } from "../data/model/WeatherInfo/DailyWeatherInfo";
import { HourlyWeatherInfo } from "../data/model/WeatherInfo/HourlyWeatherInfo";

export interface StateInterface {
    userLocation: UserLocation | undefined;
    weekWeatherInfos: Array<DailyWeatherInfo> | undefined;
    hourlyWeatherInfos: Array<HourlyWeatherInfo> | undefined;
    isLoadingDetailedData?: boolean;
}

const initialState: StateInterface = {
    userLocation: undefined,
    weekWeatherInfos: undefined,
    hourlyWeatherInfos: undefined,
    isLoadingDetailedData: false,
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<StateInterface>;
}

export enum ActionType {
    UpdateUserLocation,
    UpdateWeekWeatherInfos,
    UpdateHourlyWeatherInfos,
    SetIsLoadingDetailedData
}

export const rootReducer: Reducer<StateInterface, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.UpdateUserLocation:
            return {
                ...state,
                userLocation: action.payload.userLocation,
            };

        case ActionType.UpdateWeekWeatherInfos:
            return {
                ...state,
                weekWeatherInfos: action.payload.weekWeatherInfos,
            };

        case ActionType.UpdateHourlyWeatherInfos:
            return {
                ...state,
                hourlyWeatherInfos: action.payload.hourlyWeatherInfos,
            };

        case ActionType.SetIsLoadingDetailedData:
            return {
                ...state,
                isLoadingDetailedData: action.payload.isLoadingDetailedData,
            };

        default:
            return state;
    }
};