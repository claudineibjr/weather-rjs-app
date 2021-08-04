import { DispatchAction, StateInterface, rootReducer } from "./root-reducer";
import { createStore } from "redux";

export const store = createStore<StateInterface, DispatchAction, null, null>(rootReducer);