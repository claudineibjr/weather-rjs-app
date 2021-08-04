import { Action, Reducer } from "redux";

export interface State {
    userPreferences: string;
}

export const initialState: State = {
    userPreferences: '',
};

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<State>;
}

export enum ActionType {
    UpdateName,
}

export const rootReducer: Reducer<State, DispatchAction> = (state = initialState, action) => {
    if (action.type === ActionType.UpdateName) {
        return {
            ...state, userPreferences: action.payload.userPreferences || ''
        };
    } else {
        return state;
    }
};