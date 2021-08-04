import { Dispatch } from "redux";
import UserLocation from "../data/model/UserPreferences/UserLocation";
import UserPreferences from "../data/model/UserPreferences/UserPreferences";
import { ActionType, DispatchAction } from "./root-reducer";

export interface StateProps {
    userPreferences: string;
};

export class RootDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch;
    }

    updateUserPreferences = (userPreferences: UserPreferences | undefined) => this.dispatch({
        type: ActionType.UpdateUserPreferences,
        payload: {
            userPreferences
        },
    });
    
    updateUserLocation = (userLocation: UserLocation | undefined) => this.dispatch({
        type: ActionType.UpdateUserLocation,
        payload: {
            userLocation
        },
    });    
}