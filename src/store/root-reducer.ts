import { Action, Reducer } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import UserPreferences from "../data/model/UserPreferences/UserPreferences";

export interface StateInterface {
    userPreferences: UserPreferences | undefined;
    userLocation: UserLocation | undefined;
}

const initialState: StateInterface = {
    userPreferences: undefined,
    userLocation: undefined,
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<StateInterface>;
}

export enum ActionType {
    UpdateUserPreferences,
    UpdateUserLocation,
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

        default:
            return state;
    }
};