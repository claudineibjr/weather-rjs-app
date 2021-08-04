import { DispatchAction, State, rootReducer } from "./root-reducer";
import { createStore } from "redux";

export const store = createStore<State, DispatchAction, null, null>(rootReducer);