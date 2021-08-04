import { Action, Reducer } from "redux";
import UserPreferences from "../data/model/UserPreferences/UserPreferences";

export interface StateInterface {
    userPreferences: UserPreferences | undefined;
}

const initialState: StateInterface = {
    userPreferences: undefined,
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<StateInterface>;
}

export enum ActionType {
    UpdateUserPreferences,
}

export const rootReducer: Reducer<StateInterface, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.UpdateUserPreferences:
            return {
                ...state,
                userPreferences: action.payload.userPreferences
            };

        default:
            return state;
    }
};