import { Action, Reducer } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import UserPreferences from "../data/model/UserPreferences/UserPreferences";
import { DailyWeatherInfo } from "../data/model/WeatherInfo/DailyWeatherInfo";

export interface StateInterface {
    userPreferences: UserPreferences | undefined;
    userLocation: UserLocation | undefined;
    weekWeatherInfos: Array<DailyWeatherInfo> | undefined;
}

const initialState: StateInterface = {
    userPreferences: undefined,
    userLocation: undefined,
    weekWeatherInfos: undefined,
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<StateInterface>;
}

export enum ActionType {
    UpdateUserPreferences,
    UpdateUserLocation,
    UpdateWeekWeatherInfos,
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

        default:
            return state;
    }
};