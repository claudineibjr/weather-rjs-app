import { createStore } from 'redux';
import UserPreferences from '../data/model/UserPreferences/UserPreferences';
import { ACTIONS } from './actions';

export interface IStore {
    userPreferences?: UserPreferences,
}

export interface IAction extends IStore {
    type: string | number;
}

const INITIAL_STATE: IStore = {
    userPreferences: undefined,
}

function reducer(state: any = INITIAL_STATE, action: IAction){
    switch(action.type){
        case (ACTIONS.SAVE_USER_PREFERENCES):{
            return {
                ...state,
                userAuthenticated: action.userPreferences
            }
        }
        
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;