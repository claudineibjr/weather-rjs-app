import { Action, Reducer } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import UserPreferences from "../data/model/UserPreferences/UserPreferences";
import { DailyWeatherInfo } from "../data/model/WeatherInfo/DailyWeatherInfo";
import { HourlyWeatherInfo } from "../data/model/WeatherInfo/HourlyWeatherInfo";

export interface StateInterface {
    userPreferences: UserPreferences | undefined;
    userLocation: UserLocation | undefined;
    weekWeatherInfos: Array<DailyWeatherInfo> | undefined;
    hourlyWeatherInfos: Array<HourlyWeatherInfo> | undefined;
    isLoadingDetailedData?: boolean;
}

const initialState: StateInterface = {
    userPreferences: undefined,
    userLocation: undefined,
    weekWeatherInfos: undefined,
    hourlyWeatherInfos: undefined,
    isLoadingDetailedData: false,
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<StateInterface>;
}

export enum ActionType {
    UpdateUserPreferences,
    UpdateUserLocation,
    UpdateWeekWeatherInfos,
    UpdateHourlyWeatherInfos,
    SetIsLoadingDetailedData
}

export const rootReducer: Reducer<StateInterface, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.UpdateUserPreferences:
            return {
                ...state,
                userPreferences: action.payload.userPreferences
            };

        case ActionType.UpdateUserLocation:
            let userPreferences: UserPreferences;
            if (state.userPreferences !== undefined) {
                userPreferences = state.userPreferences!;
                userPreferences.userLocation = action.payload.userLocation!;
            } else {
                userPreferences = new UserPreferences(action.payload.userLocation!);
            }

            return {
                ...state,
                userPreferences: action.payload.userPreferences,
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