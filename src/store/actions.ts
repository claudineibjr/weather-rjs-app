import UserPreferences from "../data/model/UserPreferences/UserPreferences";
import store, { IAction, IStore } from "./store";

export enum ACTIONS {
    SAVE_USER_PREFERENCES,
}

export function saveUserPreferences(userPreferences: UserPreferences): IAction {
    return {
        type: ACTIONS.SAVE_USER_PREFERENCES,
        userPreferences: userPreferences
    }
}
